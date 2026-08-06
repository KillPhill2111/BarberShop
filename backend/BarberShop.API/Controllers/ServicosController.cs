using Microsoft.AspNetCore.Mvc;
using BarberShop.API.Models;

namespace BarberShop.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ServicosController : ControllerBase
    {
        private static readonly List<Servico> _servicos= new List<Servico>
        {
            //categoria de cortes de cabelo -- DEGRADÊ:
            new Servico{Id=1, Nome="Low Fade", Preco=45.00m,TempoEmMinutos=30, ImagemUrl="../", Categoria="Estilos com degradê"},
            new Servico{Id=2, Nome="Mid Fade", Preco=45.00m,TempoEmMinutos=30, ImagemUrl="../",  Categoria="Estilos com degradê"},
            new Servico{Id=3, Nome="High Fade", Preco=45.00m,TempoEmMinutos=35, ImagemUrl="../",  Categoria="Estilos com degradê"},
            new Servico{Id=4, Nome="Taper Fade (Estilo americano)", Preco=40.00m,TempoEmMinutos=25, ImagemUrl="../",  Categoria="Estilos com degradê"},

            //categoria de cortes de cabelo -- MODRNOS COM VOLUME NO TOPO
            new Servico { Id = 5, Nome = "Undercut", Preco = 40.00m, TempoEmMinutos = 30, ImagemUrl = "/imagens-estaticas/undercut.jpg", Categoria = "Estilos Modernos" },
            new Servico { Id = 6, Nome = "Pompadour", Preco = 50.00m, TempoEmMinutos = 40, ImagemUrl = "/imagens-estaticas/pompadour.jpg", Categoria = "Estilos Modernos" },
            new Servico { Id = 7, Nome = "French Crop / Crop Texturizado", Preco = 45.00m, TempoEmMinutos = 30, ImagemUrl = "/imagens-estaticas/french_crop.jpg", Categoria = "Estilos Modernos" },
            new Servico { Id = 8, Nome = "Slicked Back", Preco = 40.00m, TempoEmMinutos = 25, ImagemUrl = "/imagens-estaticas/slicked_back.jpg", Categoria = "Estilos Modernos" },

            // === 3. ESTILOS OUSADOS E ALTERNATIVOS ===
            new Servico { Id = 9, Nome = "Moicano (Mohawk)", Preco = 50.00m, TempoEmMinutos = 40, ImagemUrl = "/imagens-estaticas/moicano.jpg", Categoria = "Estilos Ousados" },
            new Servico { Id = 10, Nome = "Mullet / Mini Mullet", Preco = 50.00m, TempoEmMinutos = 35, ImagemUrl = "/imagens-estaticas/mullet.jpg", Categoria = "Estilos Ousados" },
            new Servico { Id = 11, Nome = "Top Knot (Coque Samurai)", Preco = 45.00m, TempoEmMinutos = 30, ImagemUrl = "/imagens-estaticas/top_knot.jpg", Categoria = "Estilos Ousados" },
            new Servico { Id = 12, Nome = "Nudred / Dreads", Preco = 60.00m, TempoEmMinutos = 50, ImagemUrl = "/imagens-estaticas/nudred.jpg", Categoria = "Estilos Ousados" },

            // === 4. CUIDADOS COM A BARBA ===
            new Servico { Id = 13, Nome = "Barba Simples (Alinhamento)", Preco = 30.00m, TempoEmMinutos = 20, ImagemUrl = "/imagens-estaticas/barba_simples.jpg", Categoria = "Barba" },
            new Servico { Id = 14, Nome = "Barba Terapia (Toalha Quente)", Preco = 50.00m, TempoEmMinutos = 35, ImagemUrl = "/imagens-estaticas/barba_terapia.jpg", Categoria = "Barba" },

            // === 5. BEM-ESTAR E ESTÉTICA ===
            new Servico { Id = 15, Nome = "Sobrancelha na Navalha", Preco = 15.00m, TempoEmMinutos = 10, ImagemUrl = "/imagens-estaticas/sobrancelha.jpg", Categoria = "Estética" },
            new Servico { Id = 16, Nome = "Lavagem + Hidratação Capilar", Preco = 25.00m, TempoEmMinutos = 15, ImagemUrl = "/imagens-estaticas/hidratacao.jpg", Categoria = "Estética" },
            new Servico { Id = 17, Nome = "Platinado Completo (Nevou)", Preco = 90.00m, TempoEmMinutos = 90, ImagemUrl = "/imagens-estaticas/nevou.jpg", Categoria = "Estética" },

            // === 6. COMBOS PROMOCIONAIS ===
            new Servico { Id = 18, Nome = "Combo: Corte (Fade) + Barba Simples", Preco = 70.00m, TempoEmMinutos = 50, ImagemUrl = "/imagens-estaticas/combo_simples.jpg", Categoria = "Combos" },
            new Servico { Id = 19, Nome = "Combo Premium: Fade + Barba Terapia + Sobrancelha", Preco = 100.00m, TempoEmMinutos = 75, ImagemUrl = "/imagens-estaticas/combo_premium.jpg", Categoria = "Combos" }

        };
        [HttpGet]
        [Route("")] 
        public ActionResult<IEnumerable<Servico>> GetServico()
        {
            return Ok(_servicos);
        }
        // [HttpGet]
        // public ActionResult<IEnumerable<Servico>> GetServico()
        // {
        //     return Ok(_servicos);
        // }

        [HttpGet("estilo/{categoria}")]
        public ActionResult<IEnumerable<Servico>> GetServicoPorCategoria(string categoria)
        {
            var filtrados=_servicos.Where(s=>s.Categoria.Equals(categoria,StringComparison.OrdinalIgnoreCase)).ToList();

            if (!filtrados.Any())
            {
                return NotFound(new {mensagem=$"Nenhuma opção encontrada para a categoria {categoria}'"});
            }
            return Ok(filtrados);
        }
    }
}