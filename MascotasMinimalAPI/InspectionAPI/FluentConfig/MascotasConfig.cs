using MascotasAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace MascotasAPI.FluentConfig
{
    public class MascotasConfig
    {
        public MascotasConfig(EntityTypeBuilder<Mascotas> entity)
        {

            entity.ToTable("¨Mascotas");
            entity.HasKey(p => p.Id);

            entity.Property(p => p.Nombre).IsRequired().HasMaxLength(50);
            entity.Property(p => p.Especie).IsRequired().HasMaxLength(50);
            entity.Property(p => p.Raza).IsRequired().HasMaxLength(50);
            entity.Property(p => p.FechaNacimiento).IsRequired();
            entity.Property(p => p.IdPropietario).IsRequired();

        }

    }
}