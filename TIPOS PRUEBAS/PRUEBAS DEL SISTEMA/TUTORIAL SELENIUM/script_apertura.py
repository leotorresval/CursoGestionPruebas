from selenium import webdriver
#Crea un objeto de configuración que permite personalizar 
#el comportamiento de la instancia de Chrome.
options = webdriver.ChromeOptions()

#Inicializar el navegador
driver = webdriver.Chrome(options=options)

#Abrir pagina
driver.get("https://www.google.com")

#Cerrar navegador
driver.quit()