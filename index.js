document.addEventListener('DOMContentLoaded', () => {
  NpSelect.NpCitySelect({
    apiKey: '5d8f3c79a4632c2540ac1832f9431d8c',
    input: {
      name: 'city',
      placeholder: 'Select City',
    },
    button: {
      text: 'Select City',
    },
    root: document.querySelector('#city'),
    onSelect: async (item, select) => {
      const warehouses = await select.api.getNpWarehouses(item.value);
    
      warehouseSelect.setOptions(warehouses);
      warehouseSelect.setDisabled(false);
      warehouseSelect.setOpen(true);
    },
  });
  
  const warehouseSelect = NpSelect.NpWarehouseSelect({
    apiKey: '5d8f3c79a4632c2540ac1832f9431d8c',
    input: {
      name: 'warehouse',
      placeholder: 'Select Warehouse',
    },
    button: {
      text: 'Select Warehouse',
    },
    root: document.querySelector('#warehouse'),
    onMounted: select => select.setDisabled(true),
  });
});
