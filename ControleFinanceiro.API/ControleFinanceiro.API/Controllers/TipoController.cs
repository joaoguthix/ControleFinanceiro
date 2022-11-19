using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ControleFinanceiro.BLL.Models;
using ControleFinanceiro.DAL;

namespace ControleFinanceiro.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoController : ControllerBase
    {
        private readonly Contexto _context;

        public TipoController(Contexto context)
        {
            _context = context;
        }

        // GET: api/Tipo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tipo>>> GetTipos()
        {
            return await _context.Tipos.ToListAsync();
        }

    }
}
