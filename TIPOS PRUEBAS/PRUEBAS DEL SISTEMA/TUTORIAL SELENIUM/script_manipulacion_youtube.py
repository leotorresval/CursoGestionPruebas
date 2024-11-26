import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

option = webdriver.ChromeOptions()
driver = webdriver.Chrome(options=option)
driver.get("https://www.youtube.com/")

driver.implicitly_wait(5)
element = driver.find_element("name","search_query")
element.send_keys("Programacion")
element.send_keys(Keys.RETURN)
time.sleep(3)