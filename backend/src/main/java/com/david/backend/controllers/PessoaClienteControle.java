package com.david.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.david.backend.dtos.PessoaClienteRequestDto;
import com.david.backend.models.Pessoa;
import com.david.backend.services.PessoaClienteService;

@RestController
@RequestMapping("/api/cliente")
public class PessoaClienteControle {

    @Autowired
    private PessoaClienteService pessoaClienteService;

    @PostMapping("/")
    public Pessoa inserir(@RequestBody PessoaClienteRequestDto pessoaClienteRequestDto) {
        return pessoaClienteService.registrar(pessoaClienteRequestDto);
    }
}
