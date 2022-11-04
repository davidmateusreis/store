package com.david.backend.dtos;

import org.springframework.beans.BeanUtils;

import com.david.backend.models.Cidade;
import com.david.backend.models.Pessoa;

import lombok.Data;

@Data
public class PessoaClienteRequestDto {

    private String nome;
    private String cpf;
    private String email;
    private String endereco;
    private Cidade cidade;
    private String cep;

    public Pessoa converter(PessoaClienteRequestDto pessoaClienteRequestDto) {
        Pessoa pessoa = new Pessoa();
        BeanUtils.copyProperties(pessoaClienteRequestDto, pessoa);
        return pessoa;
    }
}
