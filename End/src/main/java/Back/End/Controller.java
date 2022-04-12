package Back.End;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Controller 
{
	@Autowired
	NewwService service;
	@PostMapping("/old")
	public String makeCreate(@RequestBody NewwResource res)
	{
		return service.create(res).getResText()+" has Recruited";
	}
	@GetMapping("/house")
	public List<NewwResource> makeList()
	{
		return service.list();
	}
	@GetMapping("/getting/{quiz}")
	public Optional<NewwResource> makeRead(@PathVariable("quiz") int quiz)
	{
		return service.read(quiz);
	}
	@PutMapping("/update")
	public String makeUpdate(@RequestBody NewwResource res)
	{
		return service.create(res).getResText()+" has Updated";
		
	}
	@DeleteMapping("/del/{unique}")
	public String makeDelete(@PathVariable("unique") int unique)
	{
		return service.remove(unique);
	}

}
