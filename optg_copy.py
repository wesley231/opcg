import pandas as pd

# Load the Excel file
data = pd.read_excel("opcg_chinese_table.xlsx")

# Convert the DataFrame to JSON
json_data = data.to_json(orient='records')

# Print or save the JSON data
print(json_data)
