package com.david.backend.services;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.david.backend.dtos.PessoaClienteRequestDto;
import com.david.backend.models.Pessoa;
import com.david.backend.repositories.PessoaClienteRepositorio;

@Service
public class PessoaClienteService {

    @Autowired
    private PessoaClienteRepositorio pessoaClienteRepositorio;

    @Autowired
    private PermissaoPessoaService permissaoPessoaService;

    @Autowired
    private EmailService emailService;

    public Pessoa registrar(PessoaClienteRequestDto pessoaClienteRequestDto) {
        Pessoa pessoa = new PessoaClienteRequestDto().converter(pessoaClienteRequestDto);
        pessoa.setDataCriacao(new Date());
        Pessoa pessoaNova = pessoaClienteRepositorio.saveAndFlush(pessoa);
        permissaoPessoaService.vincularPessoaPermissaoCliente(pessoaNova);
        Map<String, Object> propriedadesMap = new HashMap<>();
        propriedadesMap.put("nome", pessoaNova.getNome());
        propriedadesMap.put("mensagem",
                "O registro na loja foi realizado com sucesso! Em breve você receberá a senha de acesso por email.");
        emailService.enviarEmailTemplate(pessoaNova.getEmail(), "Cadastro na Loja do David", propriedadesMap);
        return pessoaNova;
    }

}
