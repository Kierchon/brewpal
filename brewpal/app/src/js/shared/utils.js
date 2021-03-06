function filterNonNumber(value) {
    const nonNumericRegex = /[^0-9.]+/g;
    return value.replace(nonNumericRegex, '');
}

function getGrainOptions() {
    return [{ value: '', option: '' },
        { value: '0', option: 'Acid Malt' },
        { value: '1', option: 'Amber Dry Extract' },
        { value: '2', option: 'Amber Liquid Extract' },
        { value: '3', option: 'Amber Malt' },
        { value: '4', option: 'Aromatic Malt' },
        { value: '5', option: 'Barley Hulls' },
        { value: '6', option: 'Barley, Flaked' },
        { value: '7', option: 'Barley, Raw' },
        { value: '8', option: 'Barley, Torrefied' },
        { value: '9', option: 'Biscuit Malt' },
        { value: '10', option: 'Black (Patent) Malt' },
        { value: '11', option: 'Black Barley (Stout)' },
        { value: '12', option: 'Brown Malt' },
        { value: '13', option: 'Brown Sugar, Dark' },
        { value: '14', option: 'Brown Sugar, Light' },
        { value: '15', option: 'Brumalt' },
        { value: '16', option: 'Candi Sugar, Amber' },
        { value: '17', option: 'Candi Sugar, Clear' },
        { value: '18', option: 'Candi Sugar, Dark' },
        { value: '19', option: 'Cane (Beet) Sugar' },
        { value: '20', option: 'Cara-Pils/Dextrine' },
        { value: '21', option: 'Caraamber' },
        { value: '22', option: 'Carafoam' },
        { value: '23', option: 'Caramel/Crystal Malt &#8211; 10L' },
        { value: '24', option: 'Caramel/Crystal Malt &#8211; 20L' },
        { value: '25', option: 'Caramel/Crystal Malt &#8211; 30L' },
        { value: '26', option: 'Caramel/Crystal Malt &#8211; 40L' },
        { value: '27', option: 'Caramel/Crystal Malt &#8211; 60L' },
        { value: '28', option: 'Caramel/Crystal Malt &#8211; 80L' },
        { value: '29', option: 'Caramel/Crystal Malt -120L' },
        { value: '30', option: 'Caramunich Malt' },
        { value: '31', option: 'Carared' },
        { value: '32', option: 'Caravienne Malt' },
        { value: '33', option: 'Chocolate Malt' },
        { value: '34', option: 'Chocolate Malt' },
        { value: '35', option: 'Corn Sugar (Dextrose)' },
        { value: '36', option: 'Corn Syrup' },
        { value: '37', option: 'Corn, Flaked' },
        { value: '38', option: 'Dark Dry Extract' },
        { value: '39', option: 'Dark Liquid Extract' },
        { value: '40', option: 'Dememera Sugar' },
        { value: '41', option: 'Extra Light Dry Extract' },
        { value: '42', option: 'Grits' },
        { value: '43', option: 'Honey' },
        { value: '44', option: 'Invert Sugar' },
        { value: '45', option: 'Light Dry Extract' },
        { value: '46', option: 'Maple Syrup' },
        { value: '47', option: 'Melanoiden Malt' },
        { value: '48', option: 'Mild Malt' },
        { value: '49', option: 'Milk Sugar (Lactose)' },
        { value: '50', option: 'Molasses' },
        { value: '51', option: 'Munich Malt' },
        { value: '52', option: 'Munich Malt &#8211; 10L' },
        { value: '53', option: 'Munich Malt &#8211; 20L' },
        { value: '54', option: 'Oats, Flaked' },
        { value: '55', option: 'Oats, Malted' },
        { value: '56', option: 'Pale Liquid Extract' },
        { value: '57', option: 'Pale Malt (2 Row) Bel' },
        { value: '58', option: 'Pale Malt (2 Row) UK' },
        { value: '59', option: 'Pale Malt (2 Row) US' },
        { value: '60', option: 'Pale Malt (6 Row) US' },
        { value: '61', option: 'Peat Smoked Malt' },
        { value: '62', option: 'Pilsner (2 Row) Bel' },
        { value: '63', option: 'Pilsner (2 Row) Ger' },
        { value: '64', option: 'Pilsner (2 Row) UK' },
        { value: '65', option: 'Pilsner Liquid Extract' },
        { value: '66', option: 'Rice Extract Syrup' },
        { value: '67', option: 'Rice Hulls' },
        { value: '68', option: 'Rice, Flaked' },
        { value: '69', option: 'Roasted Barley' },
        { value: '70', option: 'Rye Malt' },
        { value: '71', option: 'Rye, Flaked' },
        { value: '72', option: 'Smoked Malt' },
        { value: '73', option: 'Special B Malt' },
        { value: '74', option: 'Special Roast' },
        { value: '75', option: 'Sugar, Table (Sucrose)' },
        { value: '76', option: 'Toasted Malt' },
        { value: '77', option: 'Turbinado' },
        { value: '78', option: 'Victory Malt' },
        { value: '79', option: 'Vienna Malt' },
        { value: '80', option: 'Wheat Dry Extract' },
        { value: '81', option: 'Wheat Liquid Extract' },
        { value: '82', option: 'Wheat Malt, Bel' },
        { value: '83', option: 'Wheat Malt, Dark' },
        { value: '84', option: 'Wheat Malt, Ger' },
        { value: '85', option: 'Wheat, Flaked' },
        { value: '86', option: 'Wheat, Roasted' },
        { value: '87', option: 'Wheat, Torrified' },
        { value: '88', option: 'White Wheat Malt' }];
}

export { filterNonNumber, getGrainOptions };

