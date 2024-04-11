# Testing for Backend Simulator
* Pardo 

* Sebastian

---
# Obtener los datos del usuario por consola
```python
# Obtener los datos del usuario por consola
humedad_inicial = float(input("Ingrese la humedad inicial del trigo (en decimal, por ejemplo, 0.15 para 15%): "))
humedad_deseada = float(input("Ingrese la humedad deseada del trigo (en decimal, por ejemplo, 0.05 para 5%): "))
flujo_trigo = float(input("Ingrese el flujo de trigo (en kg/min): "))
temperatura_inicial = float(input("Ingrese la temperatura inicial del trigo (en °C): "))
temperatura_final = float(input("Ingrese la temperatura final del trigo (en °C): "))
calor_especifico_trigo = float(input("Ingrese el calor específico del trigo (en kJ/kg°C): "))
entalpia_vaporizacion_agua = float(input("Ingrese la entalpía de vaporización del agua (en kJ/kg): "))

# Calcular la cantidad de agua a evaporar
agua_en_trigo_humedo = flujo_trigo * humedad_inicial
agua_en_trigo_seco = flujo_trigo * humedad_deseada
agua_a_evaporar = agua_en_trigo_humedo - agua_en_trigo_seco

# Calcular el calor sensible
calor_sensible = flujo_trigo * calor_especifico_trigo * (temperatura_final - temperatura_inicial)

# Calcular el calor latente
calor_latente = agua_a_evaporar * entalpia_vaporizacion_agua

# Calcular el calor total
calor_total = calor_sensible + calor_latente

# Calcular el peso neto de trigo después del secado
peso_neto_trigo = flujo_trigo - agua_a_evaporar

# Imprimir los resultados
print("resultados")
print("Cantidad de agua a evaporar:", agua_a_evaporar, "kg/min")
print("Calor total necesario:", calor_total, "kJ/min")
print("Peso neto de trigo después del secado:", peso_neto_trigo, "kg")
