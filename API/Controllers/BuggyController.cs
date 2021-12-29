using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    public class BuggyController : BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotfount()
        {
            return NotFound();
        }
        [HttpGet("bad-request")]
        public ActionResult GetBadrequest()
        {
            return BadRequest(new ProblemDetails{Title="This is a bad request"});
        }
        [HttpGet("unautherised")]
        public ActionResult GetUnauthorised()
        {
            return Unauthorized();
        }
        [HttpGet("validation-error")]
        public ActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem1","This is the first error");
            ModelState.AddModelError("Problem2","This is the second error");
            return ValidationProblem();
        }
        [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
            throw new Exception("this is a server error");
        }
        
    }
}