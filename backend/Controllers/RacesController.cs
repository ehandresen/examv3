using backend.Contexts;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RacesController : ControllerBase
{
    // context er 'hubben' inn til databasen
    private readonly F1Context context;
    public RacesController(F1Context _context)
    {
        context = _context;
    }


    [HttpGet]
    public async Task<ActionResult<List<Race>>> Get()
    {
        try
        {
            List<Race> races = await context.Races.ToListAsync();

            if (races is null)
                return NotFound("No races found");

            return Ok(races);
        }
        catch
        {
            return StatusCode(500); // Server error
        }
    }
}