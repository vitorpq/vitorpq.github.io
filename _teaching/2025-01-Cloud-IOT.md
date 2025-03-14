---
layout: archive
title: "Cloud e IoT e Industria 4.0 com Python"
collection: teaching
type: "Undergraduate course"
permalink: /teaching/2025-01-Cloud-IOT
venue: "UNIRUY, TDS"
date: 2025-03-13
location: "Salvador, Brasil"
---

**1. NodeMCU - ESP8266**

  * O NodeMCU ESP8266 é uma placa de desenvolvimento de baixo custo que integra um microcontrolador ESP8266 com Wi-Fi.
  * É ideal para projetos de IoT (Internet das Coisas) devido à sua conectividade sem fio e facilidade de uso.
  * Pode ser programado em várias linguagens, incluindo MicroPython e Arduino IDE (C/C++).
  * MCU - Microcontroller Unit

![image](/images/nodemcu.png)

**2. Configurando o Ambiente de Desenvolvimento**

  * **Instalação do Driver do UART da Placa:**
      * Verifique qual placa está utilizando e o UART dela
      * Para o NodeMCU ESP8266 com UART CH340 baixar no link - [CH340 drive for Windows 10](https://www.arduined.eu/files/windows10/CH341SER.zip).
      * Verificar se o MCU (Microcontroller Unit) é reconhecido pelo computador - depende no SO que você utilizar
  * **Configuração do Ambiente Python**
    * Criar um novo ambiente virtual na pasta do projeto
    ```shell
      > python3 -m venv .venv
    ``` 
    * Ativar o novo ambiente virtual
    ```shell
      # Unix (Linux/MacOS)
      > source .venv/bin/activate 
      # Windows
      > .venv/Scripts/activate.bat
    ``` 
    * Instale o pacotes ```esptool``` e ```adafruit-ampy```
    ```shell
    > (.venv) pip install esptool adafruit-ampy
    ```
  Agora estamos prontos para instalar o MicroPython no MCU.
  
  * **Instalação do MicroPython no MCU**
  * Baixe o firmware MicroPython para ESP8266 no site oficial do MicroPython - [Firmware ESP8266 Generic 20241129](https://micropython.org/resources/firmware/ESP8266_GENERIC-20241129-v1.24.1.bin)
    * Conecte o NodeMCU ao computador via USB.
    * Apagar a firmware do MCU - sua porta vai depender o SO, verificar
    ```shell
    > esptooll --port COM3 erase_flash
    ```
    * Gravar a firmware nova
     ```shell
    > esptooll --port COM3 write_flash -fm dout --flash_size=detect 0 ESP8266_GENERIC-20241129-v1.24.1.bin
    ```


**3. Primeiros Passos com MicroPython**

  * **Conectando ao NodeMCU:**
      * Abra o editor de código e conecte-se à porta serial do NodeMCU.
      * Abra o REPL (Read-Eval-Print Loop), um interpretador interativo de MicroPython.
  * **Executando comandos básicos:**
      * `print("Olá, Mundo!")`: exibe uma mensagem no console.
      * `import network`: importa a biblioteca para conexão wi-fi.
      * `sta_if = network.WLAN(network.STA_IF)`: ativa o modo estação do wi-fi.
      * `sta_if.active(True)`: Habilita o modo estação.
      * `sta_if.connect('NomeDaSuaRede', 'SenhaDaSuaRede')`: Conecta a placa a rede wi-fi escolhida.
      * `sta_if.isconnected()`: verifica se a conexão foi estabelecida com sucesso.

**4. Interagindo com os Pinos GPIO**

  * O NodeMCU possui diversos pinos GPIO (General Purpose Input/Output) que podem ser usados para controlar dispositivos externos.
  * **Exemplo:**
      * `from machine import Pin`
      * `led = Pin(2, Pin.OUT)`: configura o pino 2 como saída.
      * `led.value(1)`: acende o LED conectado ao pino 2.
      * `led.value(0)`: apaga o LED.

**5. Introdução ao Flask e MQTT**

  * **Flask:**
      * Um microframework web para Python que facilita a criação de APIs.
      * No NodeMCU, é possível usar uma versão simplificada do Flask para criar APIs web.
  * **MQTT:**
      * Um protocolo de mensagens leve e eficiente para IoT.
      * Permite a comunicação entre dispositivos e servidores em tempo real.
  * É crucial entender que o ESP8266 tem limitações de processamento, e projetos muito complexos podem ter problemas de performance.

**6. Recursos Adicionais**

  * Documentação do MicroPython: [micropython.org](https://www.google.com/url?sa=E&source=gmail&q=https://micropython.org/)
  * Documentação do ESP8266: [Espressif Systems](https://www.espressif.com/en/products/socs/esp8266)
  * Exemplos de projetos e tutoriais: Pesquise por "NodeMCU ESP8266 MicroPython projetos" no Google e no Youtube.

**Dicas para a Disciplina:**

  * Comece com projetos simples para familiarizar os alunos com o básico do NodeMCU e MicroPython.
  * À medida que os alunos ganham confiança, introduza conceitos mais avançados, como Flask e MQTT.
  * Incentive os alunos a explorar e experimentar com diferentes projetos.
  * Divida os projetos em etapas menores, focando em um conceito por vez.
  * Incentive o trabalho em grupo e a troca de conhecimentos entre os alunos.



# References
[Bibliotecas do MicroPython](https://docs.micropython.org/en/latest/library/index.html)

### Como lidar com a intermitência da conexão e envio de dados?
