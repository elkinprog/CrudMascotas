using MascotasAPI.Context;
using MascotasAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace MascotasAPI.Router
{
    public static class RouterBase
    {
      
        public static RouteGroupBuilder Mascota(this RouteGroupBuilder app)
        {
            app.MapGet("Mascota", async (MascotasContext db) =>
            {
                return await db.Mascotas.ToListAsync();
                
            });

            app.MapGet("Mascota/{id}", async (MascotasContext db, int id) =>
            {
                return await db.Mascotas.FindAsync(id);
            });

            app.MapPost("Mascota", async (MascotasContext db, Mascotas mascota) =>
            {
                await db.Mascotas.AddAsync(mascota);
                await db.SaveChangesAsync();
                return Results.Created($"/mascota/{mascota.Id}", mascota);
            });

            app.MapPut("Mascota/{id}", async (MascotasContext db, Mascotas mascota, int id) =>
            {
                var mascoticas = await db.Mascotas.FindAsync(id);
                if (mascoticas == null) return Results.NotFound();
                mascoticas.Nombre          = mascota.Nombre;
                mascoticas.Especie         = mascota.Especie;
                mascoticas.Raza            = mascota.Raza;
                mascoticas.FechaNacimiento = mascota.FechaNacimiento;
                await db.SaveChangesAsync();
                return Results.NoContent();
            });

            app.MapDelete("Mascota/{id}", async (MascotasContext db, int id) =>
            {
                var mascoticas = await db.Mascotas.FindAsync(id);
                if (mascoticas == null)
                {
                    return Results.NotFound();
                }
                db.Mascotas.Remove(mascoticas);
                await db.SaveChangesAsync();
                return Results.Ok();
            });

            return app;
        }

    }

}
