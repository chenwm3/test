package com.intelQuesAnsentity.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intelQuesAnsentity.dao.PersonMapper;
import com.intelQuesAnsentity.entity.Person;
import com.intelQuesAnsentity.service.IPersonService;

@Service("personService")
public class PersonServiceImpl implements IPersonService {

	private PersonMapper personMapper;

	public PersonMapper getPersonMapper() {
		return personMapper;
	}

	@Autowired
	public void setPersonMapper(PersonMapper personMapper) {
		this.personMapper = personMapper;
	}

	@Override
	public List<Person> loadPersons() {
		return personMapper.queryAll();
	}
}
