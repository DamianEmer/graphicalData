package com.dezc.data.code.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dezc.data.code.dao.SicksRepository;
import com.dezc.data.code.model.Sicks;


@Controller // Esta clase es un controlador 
@RequestMapping(path="/testing") //
public class MainController {

	
	@Autowired	// Para obtener el bean BusinessRepository
				// Es generado automaticamente por Spring, usado para manejar los datos
	private SicksRepository sickRepository;
	
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping(path="/regions")
	public @ResponseBody Iterable<Sicks> getAllSicks(@RequestParam(required = false, defaultValue = "") String hint){
		System.out.println(hint);
		System.out.println(sickRepository.findAllByHint(hint));
		return sickRepository.findAllByHint(hint);
	}
}
