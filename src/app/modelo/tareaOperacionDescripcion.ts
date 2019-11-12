export class tareaOperacionDescripcion {
    constructor(
        public ID: number,
        public TAREA_OPERACION_ID: number,
        public RESPONSABLE_ID: number,
        public DESCRIPCION: string,
        public ES_COMENTARIO: number,
        public FECHA_SOLICITUD: string,
        public FECHA_SOLICITUD_DESCRIPCION: string,
        public FECHA_RESPUESTA: string,
        public FECHA_RESPUESTA_DESCRIPCION: string,
        public RESPUESTA: string,        
        public RECEPTOR: string,
        public RECEPTOR_EMAIL: string,
        public EMISOR: string,
        public EMISOR_EMAIL: string,
        public TAREA: string,
        public DIAS: string,
        public FECHA_FINAL_DESCRIPCION: String,
        public USR: string,
        public RESPUESTA_DES: string
    ) { }
}