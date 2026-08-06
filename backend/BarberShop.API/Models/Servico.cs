using System.Data;

namespace BarberShop.API.Models{
    public class Servico
    {
        public int Id{get;set;}
        public string Nome{get;set;}= string.Empty;
        public decimal Preco{get;set;}
        public int TempoEmMinutos{get;set;}
        public string ImagemUrl{get;set;}=string.Empty;

        public string Categoria {get;set;}=string.Empty;
        
    }
}