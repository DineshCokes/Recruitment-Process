package Back.End;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NewwService 
{
	@Autowired
	NewwRepository repo;
	public NewwResource create(NewwResource resource)
	{
		return repo.save(resource); 
	}
	public List<NewwResource> list()
	{
		return (List<NewwResource>)repo.findAll();
	}
	public Optional<NewwResource> read(int week)
	{
		return repo.findById(week);
	}
	public String remove(int key)
	{
		String m=repo.findById(key).orElse(new NewwResource()).getResText()+" has Deleted";
		repo.deleteById(key);
		return m;
	}

}
