package Back.End;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewwRepository extends CrudRepository<NewwResource, Integer> 
{

}
