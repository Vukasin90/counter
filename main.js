const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Jun 15, 2019 22:32:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      if (distance <= 0) {
       clearInterval(x);
       document.getElementById('head').innerText = 'E, vala, docekasmo i ovo...';
       alert("HEEEEEEEEJ, PA SVADBAJE DAAANAAAAS. Sta radis na LAP TOPU?????");
       alert("Dobro, ako ovo gledas nakon svadbe, onda okej. Cestitam jos jednom :DDDD");
       alert("BTW NADAM SE DA NISMO UMRLI OD SMEHA U CRKVI, POSTO OVO PISEM IZ PROSLOSTI, PA JOS UVEK NE ZNAM");
       alert("KAKO JE BITI U BRAKU??? JEL BOLI? ");
       alert("GDE IDEMO NA MEDENI MESEC? I JA SAM POZNAV, ZAR NE?");
       alert("AJDE, DOBRO, KONTAM DA HOCES DA KORISTIS LAPTOP, NECU VISE...EVO GUGLAJ STA SI HTEO");
       alert("KOLIKO STE PARA DOBILI???? NENADU NEMA POKLONA ZA RODJENDAN, VEC SAM SE ZA SVADBU ISTROSIO, PRETPOSTAVLJAM...");
       alert("AJ SAD STVARNO, CAO....GUNGLAJJ...");
      }

    }, second)