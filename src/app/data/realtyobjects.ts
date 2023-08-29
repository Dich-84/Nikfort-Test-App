export const objects = [
    {
        nf_projectid: 'P1',
        nf_name: 'Проект 1',
        nf_building: [
            {
                nf_buildingid: 'P1B1',
                nf_name: 'Здание 1',
                nf_projectid: 'P1',
                nf_sortnumber: 1,
                nf_section: [
                    {
                        nf_sectionid: 'P1B1S1',
                        nf_name: 'Пр1З1 Подъезд 1',
                        nf_buildingid:'P1B1',
                        nf_storeynumber: 2,
                        nf_sortnumber: 11,
                        nf_floor: [
                            {
                                nf_floorid: 'P1B1S1F1',
                                nf_name: 'Пр1З1П1 Этаж 1',
                                nf_sectionid: 'P1B1S1',
                                nf_sortnumber: 111,
                                nf_maxnumberonfloor: 3,
                                nf_realtyobject: [
                                    {
                                        nf_realtyobjectid:'P1B1S1F1RO1',
                                        nf_name: 'Пр1З1П1Э1 Квартира 1',
                                        nf_floorid: 'P1B1S1F1',
                                        nf_numberonfloor: 1,
                                        nf_area: 60,
                                        nf_price: 100000,
                                        nf_amount: 6000000,
                                        nf_status: 'Бронь',
                                    },
                                    {
                                        nf_realtyobjectid:'P1B1S1F1RO2',
                                        nf_name: 'Пр1З1П1Э1 Квартира 2',
                                        nf_floorid: 'P1B1S1F1',
                                        nf_numberonfloor: 2,
                                        nf_area: 50,
                                        nf_price: 100000,
                                        nf_amount: 5000000,
                                        nf_status: 'Продан',
                                    },
                                    {
                                        nf_realtyobjectid:'P1B1S1F1RO3',
                                        nf_name: 'Пр1З1П1Э1 Квартира 3',
                                        nf_floorid: 'P1B1S1F1',
                                        nf_numberonfloor: 3,
                                        nf_area: 65,
                                        nf_price: 100000,
                                        nf_amount: 6500000,
                                        nf_status: 'Оценка',
                                    }
                                ]
                            },
                            {
                                nf_floorid: 'P1B1S1F2',
                                nf_name: 'Пр1З1П1 Этаж 2',
                                nf_sectionid: 'P1B1S1',
                                nf_sortnumber: 112,
                                nf_maxnumberonfloor: 3,
                                nf_realtyobject: [
                                    {
                                        nf_realtyobjectid:'P1B1S1F2RO1',
                                        nf_name: 'Пр1З1П1Э2 Квартира 1',
                                        nf_floorid: 'P1B1S1F2',
                                        nf_numberonfloor: 1,
                                        nf_area: 60,
                                        nf_price: 100000,
                                        nf_amount: 6000000,
                                        nf_status: 'Свободен',
                                    },
                                    {
                                        nf_realtyobjectid:'P1B1S1F2RO2',
                                        nf_name: 'Пр1З1П1Э2 Квартира 2',
                                        nf_floorid: 'P1B1S1F2',
                                        nf_numberonfloor: 2,
                                        nf_area: 50,
                                        nf_price: 100000,
                                        nf_amount: 5000000,
                                        nf_status: 'Бронь',
                                    },
                                    {
                                        nf_realtyobjectid:'P1B1S1F2RO3',
                                        nf_name: 'Пр1З1П1Э2 Квартира 3',
                                        nf_floorid: 'P1B1S1F2',
                                        nf_numberonfloor: 3,
                                        nf_area: 65,
                                        nf_price: 100000,
                                        nf_amount: 6500000,
                                        nf_status: 'Свободен',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        nf_sectionid: 'P1B1S2',
                        nf_name: 'Пр1З1 Подъезд 2',
                        nf_buildingid:'P1B1',
                        nf_storeynumber: 2,
                        nf_sortnumber: 12,
                        nf_floor: [
                            {
                                nf_floorid: 'P1B1S2F1',
                                nf_name: 'Пр1З1П2 Этаж 1',
                                nf_sectionid: 'P1B1S2',
                                nf_sortnumber: 121,
                                nf_maxnumberonfloor: 3,
                                nf_realtyobject: [
                                    {
                                        nf_realtyobjectid:'P1B1S2F1RO1',
                                        nf_name: 'Пр1З1П2Э1 Квартира 1',
                                        nf_floorid: 'P1B1S2F1',
                                        nf_numberonfloor: 1,
                                        nf_area: 60,
                                        nf_price: 100000,
                                        nf_amount: 6000000,
                                        nf_status: 'Бронь',
                                    },
                                    {
                                        nf_realtyobjectid:'P1B1S2F1RO2',
                                        nf_name: 'Пр1З1П2Э1 Квартира 2',
                                        nf_floorid: 'P1B1S2F1',
                                        nf_numberonfloor: 2,
                                        nf_area: 50,
                                        nf_price: 100000,
                                        nf_amount: 5000000,
                                        nf_status: 'Продан',
                                    },
                                    {
                                        nf_realtyobjectid:'P1B1S2F1RO3',
                                        nf_name: 'Пр1З1П2Э1 Квартира 3',
                                        nf_floorid: 'P1B1S2F1',
                                        nf_numberonfloor: 3,
                                        nf_area: 65,
                                        nf_price: 100000,
                                        nf_amount: 6500000,
                                        nf_status: 'Оценка',
                                    }
                                ]
                            },
                            {
                                nf_floorid: 'P1B1S2F2',
                                nf_name: 'Пр1З1П2 Этаж 2',
                                nf_sectionid: 'P1B1S2',
                                nf_sortnumber: 122,
                                nf_maxnumberonfloor: 3,
                                nf_realtyobject: [
                                    {
                                        nf_realtyobjectid:'P1B1S2F2RO1',
                                        nf_name: 'Пр1З1П2Э2 Квартира 1',
                                        nf_floorid: 'P1B1S2F2',
                                        nf_numberonfloor: 1,
                                        nf_area: 60,
                                        nf_price: 100000,
                                        nf_amount: 6000000,
                                        nf_status: 'Свободен',
                                    },
                                    {
                                        nf_realtyobjectid:'P1B1S2F2RO2',
                                        nf_name: 'Пр1З1П2Э2 Квартира 2',
                                        nf_floorid: 'P1B1S2F2',
                                        nf_numberonfloor: 2,
                                        nf_area: 50,
                                        nf_price: 100000,
                                        nf_amount: 5000000,
                                        nf_status: 'Бронь',
                                    },
                                    {
                                        nf_realtyobjectid:'P1B1S2F2RO3',
                                        nf_name: 'Пр1З1П2Э2 Квартира 3',
                                        nf_floorid: 'P1B1S2F2',
                                        nf_numberonfloor: 3,
                                        nf_area: 65,
                                        nf_price: 100000,
                                        nf_amount: 6500000,
                                        nf_status: 'Свободен',
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                nf_buildingid: 'P1B2',
                nf_name: 'Здание 2',
                nf_projectid: 'P1',
                nf_sortnumber: 2,
                nf_section: [
                    {
                        nf_sectionid: 'P1B2S1',
                        nf_name: 'Пр1З2 Подъезд 1',
                        nf_buildingid:'P1B2',
                        nf_storeynumber: 1,
                        nf_sortnumber: 21,
                        nf_floor: [
                            {
                                nf_floorid: 'P1B2S1F1',
                                nf_name: 'Пр1З2П1 Этаж 1',
                                nf_sectionid: 'P1B2S1',
                                nf_sortnumber: 211,
                                nf_maxnumberonfloor: 2,
                                nf_realtyobject: [
                                    {
                                        nf_realtyobjectid:'P1B2S1F1RO1',
                                        nf_name: 'Пр1З2П1Э1 Квартира 1',
                                        nf_floorid: 'P1B2S1F1',
                                        nf_numberonfloor: 1,
                                        nf_area: 45,
                                        nf_price: 150000,
                                        nf_amount: 6750000,
                                        nf_status: 'Бронь',
                                    },
                                    {
                                        nf_realtyobjectid:'P1B2S1F1RO2',
                                        nf_name: 'Пр1З2П1Э1 Квартира 2',
                                        nf_floorid: 'P1B2S1F1',
                                        nf_numberonfloor: 2,
                                        nf_area: 55,
                                        nf_price: 150000,
                                        nf_amount: 8250000,
                                        nf_status: 'Свободен',
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]