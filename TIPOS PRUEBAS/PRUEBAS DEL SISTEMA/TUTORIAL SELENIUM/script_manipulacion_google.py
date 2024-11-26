import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
options = webdriver.ChromeOptions()

driver = webdriver.Chrome(options = options)

driver.get("https://www.google.com")
driver.implicitly_wait(5)
element = driver.find_element("name","q")
element.send_keys("UTA")
boton = driver.find_element("name","btnK")
boton.click()
time.sleep(5)