from selenium import webdriver
from selenium.webdriver.common.by import By
import time
options = webdriver.ChromeOptions()
driver = webdriver.Chrome()
driver.get("https://servicios.uta.edu.ec/SistemaIntegrado/Cuenta/Login?ReturnUrl=%2fSistemaIntegrado")
usuario = driver.find_element(By.ID, "MainContent_txtNombreUsuario")
usuario.send_keys("Texto de prueba")
contra = driver.find_element(By.ID, "MainContent_txtPassword")
contra.send_keys("Texto de prueba")
texto = driver.find_element(By.ID, "MainContent_txtCaptcha")
texto.send_keys("Texto de prueba")
btn = driver.find_element(By.CLASS_NAME,"btn-primary")
btn.click()
time.sleep(5)