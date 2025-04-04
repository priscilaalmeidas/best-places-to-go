<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  title: string
}>()
</script>
<template>
  <div v-if="title === 'Como Chegar'">
    Você pode chegar a Salvador de avião, ônibus ou carro. A cidade possui um aeroporto
    internacional, abaixo encontram-se algumas opções de transporte:
    <ul>
      <li>
        Transporte público: O aeroporto de Salvador é atendido por ônibus que ligam o aeroporto ao
        centro da cidade e a outras áreas.
      </li>
      <li>
        Táxi: Há táxis disponíveis no aeroporto, que podem levá-lo diretamente ao seu destino.
      </li>
      <li>
        Aplicativos de transporte: Serviços como Uber e 99 também estão disponíveis no aeroporto.
      </li>
      <li>Aluguel de carro: Se preferir dirigir, você pode alugar um carro no aeroporto.</li>
    </ul>
    <br />
    <a href="https://www.salvador-airport.com.br/pt-br" target="_blank" rel="noopener"
      >Site do Aeroporto de Salvador</a
    >
    <br />
    <a href="https://www.ntrs.com.br/" target="_blank" rel="noopener"
      >Site da Rodoviária de Salvador</a
    >
  </div>
  <div v-else-if="title === 'Onde Ficar'">
    <h5 class="green">Bahiamar Hotel</h5>
    <p>
      Localizado na Praia do Jardim de Alah, a uma curta caminhada de várias opções de compras e
      entretenimento, o Bahiamar Hotel oferece Wi-Fi gratuito em toda a propriedade, estacionamento
      privativo de cortesia com vigilância 24 horas e piscina ao ar livre. O Centro de Convenções de
      Salvador está a 3 km do local.
    </p>
    <a href="https://bahiamar.com.br/" target="_blank" rel="noopener">Site do Bahiamar Hotel</a>
    <hr />
    <h5 class="green">Hotel Bahia do Sol</h5>
    <p>
      Localizado a 1,5 km da praia do Porto da Barra, o Hotel Bahia do Sol fica em uma região
      privilegiada no bairro de Vitória, em Salvador.
    </p>
    <a href="https://www.bahiadosol.com.br/" target="_blank" rel="noopener"
      >Site do Hotel Bahia do Sol</a
    >
    <hr />
    <h5 class="green">Monte Pascoal Praia Hotel Salvador</h5>
    <p>
      O Monte Pascoal Praia Hotel Salvador está situado à beira-mar, na famosa Praia do Farol da
      Barra, cuja vista você pode admirar a partir da varanda do seu quarto e da piscina.
    </p>
    <a href="https://montepascoalpraiahotel.com.br/salvador/" target="_blank" rel="noopener"
      >Site do Monte Pascoal Praia Hotel Salvador</a
    >
    <hr />
    <h5 class="green">Hostel Barra</h5>
    <p>
      Hostel Barra conta com serviços de concierge, quartos, jardim, Wi-Fi grátis em toda a
      propriedade e lounge compartilhado em Salvador. Praia do Farol da Barra fica a 2 minutos a pé
      de distância.
    </p>
    <a href="https://www.alberguebarra.com.br/" target="_blank" rel="noopener"
      >Site do Hostel Barra</a
    >
  </div>
  <div v-else-if="title === 'O Que Fazer'">
    <h5 class="green">Praia do Porto da Barra</h5>
    <p>
      A Praia do Porto da Barra é uma das praias mais famosas de Salvador, conhecida por suas águas
      calmas e cristalinas. É um ótimo lugar para nadar e relaxar ao sol.
    </p>
    <hr />
    <h5 class="green">Elevador Lacerda</h5>
    <p>
      O Elevador Lacerda é um dos cartões-postais de Salvador, ligando a Cidade Alta à Cidade Baixa.
      É uma ótima maneira de apreciar a vista da Baía de Todos os Santos.
    </p>

    <hr />
    <h5 class="green">Pelourinho</h5>
    <p>
      O Pelourinho é o centro histórico de Salvador, conhecido por sua arquitetura colonial e
      atmosfera vibrante. É um ótimo lugar para explorar lojas, restaurantes e a cultura local.
    </p>
  </div>
  <div v-else-if="title === 'Onde Comer'">
    <h5 class="green">Casa de Tereza</h5>
    <p>
      ENDEREÇO: Rua do Carmo, 1 - Pelourinho, Salvador - BA, 40301-380, Brasil CONTATO: (71)
      3329-3016
    </p>
    <hr />
    <h5 class="green">Recôncavo Culinária Bar E Restaurante</h5>
    <p>
      ENDEREÇO: Professor Fernando Luz 63 Barra, Salvador, Bahia 40140-160 Brasil CONTATO: (71)
      3512-7326
    </p>
    <hr />
    <h5 class="green">CÖA Restaurante Bar</h5>
    <p>
      ENDEREÇO: Travessia Basilio De Magalhaes 44, Salvador, Bahia 41940-430 Brasil CONTATO: (71)
      99694-3336
    </p>
    <hr />
    <h5 class="green">Jabú Resto & Bar</h5>
    <p>
      ENDEREÇO: Rua Eurycles de Mattos 191 Rio Vermelho, Salvador, Bahia 41950-250 Brasil CONTATO:
      (71) 98856-0099
    </p>
    <hr />
    <h5 class="green">Restaurante Vini Figueira</h5>
    <p>
      ENDEREÇO: Travessa Bartholomeu de Gusmão 140 Rio Vermelho, Salvador, Bahia 41950-310 Brasil
      CONTATO: (71) 99380-0045
    </p>
  </div>
</template>
