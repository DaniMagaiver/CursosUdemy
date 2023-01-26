#!python3


dias_da_semana = {
    'úteis': ['segunda', 'terça', 'quarta', 'quinta', 'sexta'],
    'inúteis': ['sábado', 'domingo']
} 

for dia in ['domingo','segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']:
    for tipos in dias_da_semana:
        if dia in dias_da_semana[tipos]:
            print(f'{dia} -> {tipos}') 
            break
    else:
        print('Dia inválido!')