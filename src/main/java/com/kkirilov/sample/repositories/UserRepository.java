package com.kkirilov.sample.repositories;

import com.kkirilov.sample.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

}
