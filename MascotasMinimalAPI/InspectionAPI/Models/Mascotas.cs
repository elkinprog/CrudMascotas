namespace MascotasAPI.Models
{
    public class Mascotas
    {
        public int      Id              { get; set; }
        public String?  Nombre          { get; set; }
        public String?  Especie         { get; set; }
        public String?  Raza            { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public int      IdPropietario   { get; set; }
    }
}
