CLASS zcl_test_ok DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC .

  PUBLIC SECTION.
    CLASS-METHODS update_tadir
      IMPORTING it_tadir      TYPE tt_tadir
                iv_srcsystem  TYPE tadir-srcsystem
                iv_author     TYPE tadir-author
                iv_test_modus TYPE abap_bool DEFAULT abap_false
      EXPORTING ev_total      TYPE i
                ev_success    TYPE i
                et_success    TYPE tt_tadir
                et_fail       TYPE tt_tadir.

  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.



CLASS ZCL_TEST_OK IMPLEMENTATION.


  METHOD update_tadir.
    DATA: ls_tadir_new LIKE LINE OF et_success.

    LOOP AT it_tadir INTO DATA(ls_tadir).

      CALL FUNCTION 'TR_TADIR_INTERFACE'
        EXPORTING
          wi_remove_repair_flag = ' '              " X - Reparaturkennzeichen ruecksetzen
          wi_set_repair_flag    = ' '              " X - Reparaturkennzeichen setzen
          wi_test_modus         = iv_test_modus              " X - Simulationsmodus (kein Update)
          wi_tadir_pgmid        = ls_tadir-pgmid                 " Eingabe zum TADIR-Feld PGMID
          wi_tadir_object       = ls_tadir-object                 " Eingabe zum TADIR-Feld OBJECT
          wi_tadir_obj_name     = ls_tadir-obj_name                 " Eingabe zum TADIR-Feld OBJ_NAME
          wi_tadir_srcsystem    = iv_srcsystem             " Eingabe zum TADIR-Feld SRCSYSTEM
          wi_tadir_author       = iv_author             " Eingabe zum TADIR-Feld AUTHOR
          wi_remove_genflag     = ' '              " X - Generierungskennzeichen loeschen
          wi_set_genflag        = ' '              " Generierungskennzeichen setzen (siehe Doku.)
        IMPORTING
          new_tadir_entry       = ls_tadir_new
        EXCEPTIONS
          OTHERS                = 25.

      IF sy-subrc <> 0.
        APPEND ls_tadir TO et_fail.
      ELSE.
        APPEND ls_tadir_new TO et_success.
        ev_success = ev_success + 1.
      ENDIF.
      ev_total = ev_total + 1.
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.
