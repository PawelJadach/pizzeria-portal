# Dashboard

  - /
    - satystyki dzisiejszych zamówień (zdalne, lokalne) x
    - lista rezerwacji i eventów zaplanowanych na dzisiaj x

# Logowanie

  - /login x
    - login, hasło oraz guzik do zalogowania (link do dashboard) x

# Dostepność stolików

  - /tables
    - wybór daty i godziny
    - tabela z listą rezerwacji oraz wydarzeń x
      - każda kolumna to jeden stolik x
      - każdy wiersz to 30min x
      - ma przypominać widok tygodnia w kalendarzu google, gdzie w kolumnach zamiast dni są różne stoliki x
      - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów x
  - /tables/booking/:id
    - wszystkie informacje dotyczące rezerwacji
    - umożliwia edycję i zapisanie zmian
  - /tables/booking/new <- nowa rezerwacja
    - umożliwia dodanie nowej rezerwacji
  - /tables/events/:id
    - wszystkie informacje dotyczące eventu
    - umożliwia edycję i zapisanie zmian
  - /tables/events/new <- nowe wydarzenie
    - umożliwia dodanie nowego eventu

# Kelner

  - /waiter <- lista stolików i aktualny status x
    - tabela
      - w wierszach wyświetla stoliki
      - w kolumnach informacje (status, czas od ostatniej aktywności)
      - w ostatniej kolumnie mamy dostępne akcje dla danego stolika
  - /waiter/order/new <- nowe zamówienie x
    - numer stolika (edytowalny)
    - menu produktów
    - opcje wybranego produktu
    - zamówienie (zamówione produkty z opcjami i ceną)
    - kwota zamówienia
  - /waiter/order/:id
    - jak powyższa
# Kuchnia

  - /kitchen
    - lista zamówień w kolejności złożenia
    - lista musi zawierać nr stolika (lub zamówienia zdalnego)
    - pełne informacje dotyczące zamówionych dań
    - na liście możliwość oznaczenia zamówienia jako zrealizowane
