namespace myEstimador;

type tv_tecno_dif : Integer enum {
    A = 1;
    B = 3;
    C = 5;
};

type tv_tecno : String enum {
    HTML;
    CSS;
    JAVA;
    SAPUI5;
    JAVASCRIPT
}

type tv_dif : String enum {
    BAJO;
    MEDIO;
    ALTO;
}

entity Proyectos {
    key ID         : Integer;
        MD         : tv_tecno_dif;
        technology : tv_tecno;
        difficulty : tv_dif;
}
