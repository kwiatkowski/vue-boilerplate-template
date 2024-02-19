# vue-recruitment-task

##### Treść zadania

###### Część pierwsza:
Proszę wypisać wszystkie posty w tabeli
Endpoint do postów: https://jsonplaceholder.typicode.com/posts
Posty mają zostać raz pobrane i później operujemy na nich tylko na froncie.
Kolumny tabeli Id, Tytuł (title), Treść (body), Akcje (kolumna dla przycisku„usuń” który będzie w dalszej części, na razie pusta)

###### druga:
Należy wykonać frontową paginację, po 10 wyników. Na dole lista stron, zaznaczona ta, na której się znajdujemy.
U góry pole type input text z wyszukiwarką ignorująca wielkość liter, w momencie gdy jest włączone wyszukiwanie (zawartość inputa nie jest pusta) to paginacja nie działa (zawsze wyświetlane jest wszystko). Proszę przefiltrować tabelę po tytułach.
Podpowiedź: do wykonania wyszukiwarki i paginacji można wykorzystać computed.
W przypadku błędu pobrania danych z endpointa pokazać alert z informacją, że nie udało się pobrać danych.
Podział na komponenty jest dowolny, należy uwzględnić ich uniwersalność i reużywalność.

###### Część trzecia:
Proszę dodać select z parametrem decydującym o ilości wypisywanych wyników (opcje: 10, 20, 50, domyślnie 10)

Następnie proszę o dodanie funkcji ‚usuwanie posta’ - w ostatniej kolumnie tabeli proszę umieścić przycisk - „Usuń“,
po kliknięciu w który pojawia się popup z potwierdzeniem „Czy na pewno chcesz usunąć” Tak/Nie i krzyżykiem w prawym górnym rogu umożliwiającym wyłączenie popupu.
Popup ma być osobnym, uniwersalnym komponentem do którego należy przekazać jako props: komunikat, dostępne przyciski
Po przyciśnięciu dowolnego przycisku (tak/nie) należy wyemitować wybraną wartość.
Popup powinien być htmlowym divem na środku ekranu i blokować inne przyciski (np. poprzez przezroczystego diva pod spodem)
Po naciśnięciu Nie - zamykamy popup
Po naciśnięciu Tak - robimy request DELETE do posta zgodnie z API https://jsonplaceholder.typicode.com/ oraz usuwamy go na froncie

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
