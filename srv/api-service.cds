using {myEstimador as my} from '../db/schema';


service api {
    @readonly
    entity Proyectos as projection on my.Proyectos;

    action crearProyecto(technology : String, difficulty : String) returns String;

};
