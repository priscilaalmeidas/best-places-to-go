<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  title: string
}>()
</script>
<template>
  <div v-if="title === 'Como Chegar'">
    Você pode chegar a Maceió de avião, ônibus ou carro. A cidade possui um aeroporto, abaixo
    encontram-se algumas opções de transporte:
    <ul>
      <li>
        Transporte público: O aeroporto de Maceió é atendido por ônibus que ligam o aeroporto ao
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
    <a
      href="https://www.aenabrasil.com.br/pt/aeroportos/aeroporto-internacional-de-maceio-zumbi-dos-palmares/index.html"
      target="_blank"
      rel="noopener"
      >Site do Aeroporto de Maceió</a
    >
    <br />
    <a href="https://rodoviariaonline.com.br/rodoviaria/maceio/" target="_blank" rel="noopener"
      >Site da Rodoviária de Maceió</a
    >
  </div>
  <div v-else-if="title === 'Onde Ficar'">
    <h5 class="green">Pousada ecomaceió</h5>
    <p>
      A Pousada ecomaceió é uma pousada ecológica, um novo conceito e um moderno design, elegante e
      aconchegante. Foi projetada para uma estadia com todo o conforto, segurança e higiene.
    </p>
    <a href="https://www.pousadaecomaceio.com.br/" target="_blank" rel="noopener"
      >Site da Pousada ecomaceió</a
    >
    <hr />
    <h5 class="green">Intercity Maceió</h5>
    <p>
      Hotel na Praia de Ponta Verde em Maceió, uma das jóias naturais de Alagoas. A poucos passos
      das águas claras e calmas do mar, perfeito para a prática de esportes aquáticos, e do
      movimentado calçadão repleto de quiosques e restaurantes.
    </p>
    <a
      href="https://www.intercityhoteis.com.br/hotel-maceio/hotel-intercity-maceio"
      target="_blank"
      rel="noopener"
      >Site do Intercity Maceió</a
    >
    <hr />
    <h5 class="green">Ritz Suítes</h5>
    <p>
      Com uma localização privilegiada à beira-mar, o Ritz Suítes Grand Hotel Boutique combina
      conforto, exclusividade e um design cuidadosamente planejado para oferecer uma experiência
      única aos seus hóspedes. Cada detalhe foi pensado para refletir a beleza e a cultura local,
      proporcionando um ambiente moderno e elegante, sem perder a conexão com o estilo praiano de
      Maceió.
    </p>
    <a href="https://www.hoteisritzalagoas.com.br/suites" target="_blank" rel="noopener"
      >Site do Ritz Suítes</a
    >
    <a href="https://www.abihal.com.br/maceio/" target="_blank" rel="noopener">Mais Opções</a>
  </div>
  <div v-else-if="title === 'O Que Fazer'">
    <h5 class="green">Pontal da Barra</h5>
    <p>
      Fãs de artesanato e de trabalhos bem feitos precisam dar uma passadinha no Pontal da Barra, em
      especial na apelidada "Rua das Rendeiras". O Pontal é um bairro que reúne boas lojas para
      comprar artesanato, mas é, principalmente, onde muitas mulherem vivem da renda, expõem seus
      trabalhos e os vendem. A especialidade no lugar é o filé, uma renda típica de Alagoas, que
      pode ser identificada pelos tecidos coloridos e vazados.
    </p>
    <hr />
    <h5 class="green">Praia do Francês</h5>
    <p>
      A Praia do Francês é uma das mais famosas de Alagoas, conhecida por suas águas cristalinas e
      coqueirais. É um ótimo lugar para relaxar, nadar e praticar esportes aquáticos.
    </p>
    <hr />
    <h5 class="green">Praia do Gunga</h5>
    <p>
      A Praia do Gunga é famosa por suas falésias coloridas e águas calmas. É um destino popular
      para passeios de barco e atividades aquáticas.
    </p>
    <hr />
    <h5 class="green">Praia de Pajuçara</h5>
    <p>
      A Praia de Pajuçara é conhecida por suas piscinas naturais e águas mornas. É um ótimo lugar
      para relaxar e aproveitar o sol.
    </p>
    <hr />
    <h5 class="green">Cadeira de Praia Gigante - Ponta Verde</h5>
    <p>
      A cadeira gigante mais famosa do Brasil se encontra na orla da Ponta Verde. O monumento fica
      de costas para o mar, o que garante um belo visual de fundo para fotos com a família, amigos
      ou para garantir selfies.
    </p>
    <hr />
    <h5 class="green">Balanço Gigante - Santa Amélia</h5>
    <p>
      Além da orla, outro ponto da cidade que merece ser visitado é o balanço gigante no bairro da
      Santa Amélia. Com sete metros de altura, o local é perfeito para uma selfie no pôr do sol com
      vista para a Lagoa Mundaú.
    </p>
  </div>
  <div v-else-if="title === 'Onde Comer'">
    <h5 class="green">Delícias Alagoanas</h5>
    <p>
      ENDEREÇO: Passo de Camaragibe - AL, 57930-000<br />
      CONTATO: (82) 99949-0270
    </p>
    <hr />
    <h5 class="green">Casa de Mãinha</h5>
    <p>
      ENDEREÇO: Jaraguá, Maceió - AL, 57022-180<br />
      CONTATO: (82) 98138-2897
    </p>
    <hr />
    <h5 class="green">Sa Menina</h5>
    <p>
      ENDEREÇO: Mangabeiras, Maceió - AL, 57035-556<br />
      CONTATO: (82) 3355-2359
    </p>
    <hr />
    <h5 class="green">Sea Comidas do Mar</h5>
    <p>
      ENDEREÇO: Ponta Verde, Maceió - AL, 57035-210<br />
      CONTATO: (82) (82) 99997-2257
    </p>
  </div>
</template>
