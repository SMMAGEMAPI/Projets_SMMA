var wms_layers = [];

var lyr_PlanIGN_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Plan IGN',
                            popuplayertitle: 'Plan IGN',
                            type: '',
                            opacity: 0.235000,
                            
                            
                          });
              wms_layers.push([lyr_PlanIGN_0, 0]);
var format_Perimetre_Syndicat_VF_1 = new ol.format.GeoJSON();
var features_Perimetre_Syndicat_VF_1 = format_Perimetre_Syndicat_VF_1.readFeatures(json_Perimetre_Syndicat_VF_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perimetre_Syndicat_VF_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perimetre_Syndicat_VF_1.addFeatures(features_Perimetre_Syndicat_VF_1);
var lyr_Perimetre_Syndicat_VF_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perimetre_Syndicat_VF_1, 
                style: style_Perimetre_Syndicat_VF_1,
                popuplayertitle: 'Perimetre_Syndicat_VF',
                interactive: false,
                title: '<img src="styles/legend/Perimetre_Syndicat_VF_1.png" /> Perimetre_Syndicat_VF'
            });
var format_TRONCONSHYDRO_SMMA_2 = new ol.format.GeoJSON();
var features_TRONCONSHYDRO_SMMA_2 = format_TRONCONSHYDRO_SMMA_2.readFeatures(json_TRONCONSHYDRO_SMMA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRONCONSHYDRO_SMMA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRONCONSHYDRO_SMMA_2.addFeatures(features_TRONCONSHYDRO_SMMA_2);
var lyr_TRONCONSHYDRO_SMMA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRONCONSHYDRO_SMMA_2, 
                style: style_TRONCONSHYDRO_SMMA_2,
                popuplayertitle: 'TRONCONS HYDRO_SMMA',
                interactive: true,
                title: '<img src="styles/legend/TRONCONSHYDRO_SMMA_2.png" /> TRONCONS HYDRO_SMMA'
            });
var format_PLANS_D_EAU_SMMA_3 = new ol.format.GeoJSON();
var features_PLANS_D_EAU_SMMA_3 = format_PLANS_D_EAU_SMMA_3.readFeatures(json_PLANS_D_EAU_SMMA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLANS_D_EAU_SMMA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLANS_D_EAU_SMMA_3.addFeatures(features_PLANS_D_EAU_SMMA_3);
var lyr_PLANS_D_EAU_SMMA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLANS_D_EAU_SMMA_3, 
                style: style_PLANS_D_EAU_SMMA_3,
                popuplayertitle: 'PLANS_D_EAU_SMMA',
                interactive: true,
                title: '<img src="styles/legend/PLANS_D_EAU_SMMA_3.png" /> PLANS_D_EAU_SMMA'
            });
var format_A_NPRU_CHAMP_DU_PIN_4 = new ol.format.GeoJSON();
var features_A_NPRU_CHAMP_DU_PIN_4 = format_A_NPRU_CHAMP_DU_PIN_4.readFeatures(json_A_NPRU_CHAMP_DU_PIN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A_NPRU_CHAMP_DU_PIN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_NPRU_CHAMP_DU_PIN_4.addFeatures(features_A_NPRU_CHAMP_DU_PIN_4);
var lyr_A_NPRU_CHAMP_DU_PIN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_A_NPRU_CHAMP_DU_PIN_4, 
                style: style_A_NPRU_CHAMP_DU_PIN_4,
                popuplayertitle: 'A_NPRU_CHAMP_DU_PIN',
                interactive: true,
                title: '<img src="styles/legend/A_NPRU_CHAMP_DU_PIN_4.png" /> A_NPRU_CHAMP_DU_PIN'
            });
var format_B_RIPISYLVE_MOSELLE_JARMENIL_5 = new ol.format.GeoJSON();
var features_B_RIPISYLVE_MOSELLE_JARMENIL_5 = format_B_RIPISYLVE_MOSELLE_JARMENIL_5.readFeatures(json_B_RIPISYLVE_MOSELLE_JARMENIL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B_RIPISYLVE_MOSELLE_JARMENIL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B_RIPISYLVE_MOSELLE_JARMENIL_5.addFeatures(features_B_RIPISYLVE_MOSELLE_JARMENIL_5);
var lyr_B_RIPISYLVE_MOSELLE_JARMENIL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B_RIPISYLVE_MOSELLE_JARMENIL_5, 
                style: style_B_RIPISYLVE_MOSELLE_JARMENIL_5,
                popuplayertitle: 'B_RIPISYLVE_MOSELLE_JARMENIL',
                interactive: true,
                title: '<img src="styles/legend/B_RIPISYLVE_MOSELLE_JARMENIL_5.png" /> B_RIPISYLVE_MOSELLE_JARMENIL'
            });
var format_C_SAINT_OGER_6 = new ol.format.GeoJSON();
var features_C_SAINT_OGER_6 = format_C_SAINT_OGER_6.readFeatures(json_C_SAINT_OGER_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C_SAINT_OGER_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C_SAINT_OGER_6.addFeatures(features_C_SAINT_OGER_6);
var lyr_C_SAINT_OGER_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C_SAINT_OGER_6, 
                style: style_C_SAINT_OGER_6,
                popuplayertitle: 'C_SAINT_OGER',
                interactive: true,
                title: '<img src="styles/legend/C_SAINT_OGER_6.png" /> C_SAINT_OGER'
            });
var format_D_SOBA_7 = new ol.format.GeoJSON();
var features_D_SOBA_7 = format_D_SOBA_7.readFeatures(json_D_SOBA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D_SOBA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D_SOBA_7.addFeatures(features_D_SOBA_7);
var lyr_D_SOBA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_D_SOBA_7, 
                style: style_D_SOBA_7,
                popuplayertitle: 'D_SOBA',
                interactive: true,
                title: '<img src="styles/legend/D_SOBA_7.png" /> D_SOBA'
            });
var format_E_TRAVERSEE_EPINAL_8 = new ol.format.GeoJSON();
var features_E_TRAVERSEE_EPINAL_8 = format_E_TRAVERSEE_EPINAL_8.readFeatures(json_E_TRAVERSEE_EPINAL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E_TRAVERSEE_EPINAL_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E_TRAVERSEE_EPINAL_8.addFeatures(features_E_TRAVERSEE_EPINAL_8);
var lyr_E_TRAVERSEE_EPINAL_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E_TRAVERSEE_EPINAL_8, 
                style: style_E_TRAVERSEE_EPINAL_8,
                popuplayertitle: 'E_TRAVERSEE_EPINAL',
                interactive: true,
                title: '<img src="styles/legend/E_TRAVERSEE_EPINAL_8.png" /> E_TRAVERSEE_EPINAL'
            });
var format_F_ETANGS_SOCOURT_GRIPPORT_9 = new ol.format.GeoJSON();
var features_F_ETANGS_SOCOURT_GRIPPORT_9 = format_F_ETANGS_SOCOURT_GRIPPORT_9.readFeatures(json_F_ETANGS_SOCOURT_GRIPPORT_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_F_ETANGS_SOCOURT_GRIPPORT_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_F_ETANGS_SOCOURT_GRIPPORT_9.addFeatures(features_F_ETANGS_SOCOURT_GRIPPORT_9);
var lyr_F_ETANGS_SOCOURT_GRIPPORT_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_F_ETANGS_SOCOURT_GRIPPORT_9, 
                style: style_F_ETANGS_SOCOURT_GRIPPORT_9,
                popuplayertitle: 'F_ETANGS_SOCOURT_GRIPPORT',
                interactive: true,
                title: '<img src="styles/legend/F_ETANGS_SOCOURT_GRIPPORT_9.png" /> F_ETANGS_SOCOURT_GRIPPORT'
            });
var format_G_AFFLUENTS_MOSELLE_10 = new ol.format.GeoJSON();
var features_G_AFFLUENTS_MOSELLE_10 = format_G_AFFLUENTS_MOSELLE_10.readFeatures(json_G_AFFLUENTS_MOSELLE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G_AFFLUENTS_MOSELLE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G_AFFLUENTS_MOSELLE_10.addFeatures(features_G_AFFLUENTS_MOSELLE_10);
var lyr_G_AFFLUENTS_MOSELLE_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G_AFFLUENTS_MOSELLE_10, 
                style: style_G_AFFLUENTS_MOSELLE_10,
                popuplayertitle: 'G_AFFLUENTS_MOSELLE',
                interactive: true,
                title: '<img src="styles/legend/G_AFFLUENTS_MOSELLE_10.png" /> G_AFFLUENTS_MOSELLE'
            });
var format_H_MOSELLE_SOURCE_A_RUPT_11 = new ol.format.GeoJSON();
var features_H_MOSELLE_SOURCE_A_RUPT_11 = format_H_MOSELLE_SOURCE_A_RUPT_11.readFeatures(json_H_MOSELLE_SOURCE_A_RUPT_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_H_MOSELLE_SOURCE_A_RUPT_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_H_MOSELLE_SOURCE_A_RUPT_11.addFeatures(features_H_MOSELLE_SOURCE_A_RUPT_11);
var lyr_H_MOSELLE_SOURCE_A_RUPT_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_H_MOSELLE_SOURCE_A_RUPT_11, 
                style: style_H_MOSELLE_SOURCE_A_RUPT_11,
                popuplayertitle: 'H_MOSELLE_SOURCE_A_RUPT',
                interactive: true,
                title: '<img src="styles/legend/H_MOSELLE_SOURCE_A_RUPT_11.png" /> H_MOSELLE_SOURCE_A_RUPT'
            });
var format_I_MOSELOTTE_ET_AFFLUENTS_12 = new ol.format.GeoJSON();
var features_I_MOSELOTTE_ET_AFFLUENTS_12 = format_I_MOSELOTTE_ET_AFFLUENTS_12.readFeatures(json_I_MOSELOTTE_ET_AFFLUENTS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_I_MOSELOTTE_ET_AFFLUENTS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_I_MOSELOTTE_ET_AFFLUENTS_12.addFeatures(features_I_MOSELOTTE_ET_AFFLUENTS_12);
var lyr_I_MOSELOTTE_ET_AFFLUENTS_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_I_MOSELOTTE_ET_AFFLUENTS_12, 
                style: style_I_MOSELOTTE_ET_AFFLUENTS_12,
                popuplayertitle: 'I_MOSELOTTE_ET_AFFLUENTS',
                interactive: true,
                title: '<img src="styles/legend/I_MOSELOTTE_ET_AFFLUENTS_12.png" /> I_MOSELOTTE_ET_AFFLUENTS'
            });
var format_J_VOLOGNE_ET_AFFLUENTS_13 = new ol.format.GeoJSON();
var features_J_VOLOGNE_ET_AFFLUENTS_13 = format_J_VOLOGNE_ET_AFFLUENTS_13.readFeatures(json_J_VOLOGNE_ET_AFFLUENTS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_J_VOLOGNE_ET_AFFLUENTS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_J_VOLOGNE_ET_AFFLUENTS_13.addFeatures(features_J_VOLOGNE_ET_AFFLUENTS_13);
var lyr_J_VOLOGNE_ET_AFFLUENTS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_J_VOLOGNE_ET_AFFLUENTS_13, 
                style: style_J_VOLOGNE_ET_AFFLUENTS_13,
                popuplayertitle: 'J_VOLOGNE_ET_AFFLUENTS',
                interactive: true,
                title: '<img src="styles/legend/J_VOLOGNE_ET_AFFLUENTS_13.png" /> J_VOLOGNE_ET_AFFLUENTS'
            });
var format_K_MULETTE_PERLIERE_14 = new ol.format.GeoJSON();
var features_K_MULETTE_PERLIERE_14 = format_K_MULETTE_PERLIERE_14.readFeatures(json_K_MULETTE_PERLIERE_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K_MULETTE_PERLIERE_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K_MULETTE_PERLIERE_14.addFeatures(features_K_MULETTE_PERLIERE_14);
var lyr_K_MULETTE_PERLIERE_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_K_MULETTE_PERLIERE_14, 
                style: style_K_MULETTE_PERLIERE_14,
                popuplayertitle: 'K_MULETTE_PERLIERE',
                interactive: true,
                title: '<img src="styles/legend/K_MULETTE_PERLIERE_14.png" /> K_MULETTE_PERLIERE'
            });
var format_L_DURBION_15 = new ol.format.GeoJSON();
var features_L_DURBION_15 = format_L_DURBION_15.readFeatures(json_L_DURBION_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L_DURBION_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L_DURBION_15.addFeatures(features_L_DURBION_15);
var lyr_L_DURBION_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L_DURBION_15, 
                style: style_L_DURBION_15,
                popuplayertitle: 'L_DURBION',
                interactive: true,
                title: '<img src="styles/legend/L_DURBION_15.png" /> L_DURBION'
            });
var format_M_NEUNE_16 = new ol.format.GeoJSON();
var features_M_NEUNE_16 = format_M_NEUNE_16.readFeatures(json_M_NEUNE_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M_NEUNE_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M_NEUNE_16.addFeatures(features_M_NEUNE_16);
var lyr_M_NEUNE_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_M_NEUNE_16, 
                style: style_M_NEUNE_16,
                popuplayertitle: 'M_NEUNE',
                interactive: true,
                title: '<img src="styles/legend/M_NEUNE_16.png" /> M_NEUNE'
            });
var format_N_SEUILS_ST_NABORD_17 = new ol.format.GeoJSON();
var features_N_SEUILS_ST_NABORD_17 = format_N_SEUILS_ST_NABORD_17.readFeatures(json_N_SEUILS_ST_NABORD_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N_SEUILS_ST_NABORD_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N_SEUILS_ST_NABORD_17.addFeatures(features_N_SEUILS_ST_NABORD_17);
var lyr_N_SEUILS_ST_NABORD_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N_SEUILS_ST_NABORD_17, 
                style: style_N_SEUILS_ST_NABORD_17,
                popuplayertitle: 'N_SEUILS_ST_NABORD',
                interactive: true,
                title: '<img src="styles/legend/N_SEUILS_ST_NABORD_17.png" /> N_SEUILS_ST_NABORD'
            });
var format_O_MOSELLE_MOSELOTTE_18 = new ol.format.GeoJSON();
var features_O_MOSELLE_MOSELOTTE_18 = format_O_MOSELLE_MOSELOTTE_18.readFeatures(json_O_MOSELLE_MOSELOTTE_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_O_MOSELLE_MOSELOTTE_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_O_MOSELLE_MOSELOTTE_18.addFeatures(features_O_MOSELLE_MOSELOTTE_18);
var lyr_O_MOSELLE_MOSELOTTE_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_O_MOSELLE_MOSELOTTE_18, 
                style: style_O_MOSELLE_MOSELOTTE_18,
                popuplayertitle: 'O_MOSELLE_MOSELOTTE',
                interactive: true,
                title: '<img src="styles/legend/O_MOSELLE_MOSELOTTE_18.png" /> O_MOSELLE_MOSELOTTE'
            });
var format_P_AFFLUENTS_MOSELLE_MOSELOTTE_19 = new ol.format.GeoJSON();
var features_P_AFFLUENTS_MOSELLE_MOSELOTTE_19 = format_P_AFFLUENTS_MOSELLE_MOSELOTTE_19.readFeatures(json_P_AFFLUENTS_MOSELLE_MOSELOTTE_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P_AFFLUENTS_MOSELLE_MOSELOTTE_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P_AFFLUENTS_MOSELLE_MOSELOTTE_19.addFeatures(features_P_AFFLUENTS_MOSELLE_MOSELOTTE_19);
var lyr_P_AFFLUENTS_MOSELLE_MOSELOTTE_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P_AFFLUENTS_MOSELLE_MOSELOTTE_19, 
                style: style_P_AFFLUENTS_MOSELLE_MOSELOTTE_19,
                popuplayertitle: 'P_AFFLUENTS_MOSELLE_MOSELOTTE',
                interactive: true,
                title: '<img src="styles/legend/P_AFFLUENTS_MOSELLE_MOSELOTTE_19.png" /> P_AFFLUENTS_MOSELLE_MOSELOTTE'
            });
var format_Q_ZONES_HUMIDES_20 = new ol.format.GeoJSON();
var features_Q_ZONES_HUMIDES_20 = format_Q_ZONES_HUMIDES_20.readFeatures(json_Q_ZONES_HUMIDES_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Q_ZONES_HUMIDES_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Q_ZONES_HUMIDES_20.addFeatures(features_Q_ZONES_HUMIDES_20);
var lyr_Q_ZONES_HUMIDES_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Q_ZONES_HUMIDES_20, 
                style: style_Q_ZONES_HUMIDES_20,
                popuplayertitle: 'Q_ZONES_HUMIDES',
                interactive: true,
                title: '<img src="styles/legend/Q_ZONES_HUMIDES_20.png" /> Q_ZONES_HUMIDES'
            });
var format_R_EURON_21 = new ol.format.GeoJSON();
var features_R_EURON_21 = format_R_EURON_21.readFeatures(json_R_EURON_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R_EURON_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R_EURON_21.addFeatures(features_R_EURON_21);
var lyr_R_EURON_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R_EURON_21, 
                style: style_R_EURON_21,
                popuplayertitle: 'R_EURON',
                interactive: true,
                title: '<img src="styles/legend/R_EURON_21.png" /> R_EURON'
            });
var format_S_CLEURIE_22 = new ol.format.GeoJSON();
var features_S_CLEURIE_22 = format_S_CLEURIE_22.readFeatures(json_S_CLEURIE_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S_CLEURIE_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_CLEURIE_22.addFeatures(features_S_CLEURIE_22);
var lyr_S_CLEURIE_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S_CLEURIE_22, 
                style: style_S_CLEURIE_22,
                popuplayertitle: 'S_CLEURIE',
                interactive: true,
                title: '<img src="styles/legend/S_CLEURIE_22.png" /> S_CLEURIE'
            });
var format_T_HAUTE_MOSELOTTE_23 = new ol.format.GeoJSON();
var features_T_HAUTE_MOSELOTTE_23 = format_T_HAUTE_MOSELOTTE_23.readFeatures(json_T_HAUTE_MOSELOTTE_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T_HAUTE_MOSELOTTE_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T_HAUTE_MOSELOTTE_23.addFeatures(features_T_HAUTE_MOSELOTTE_23);
var lyr_T_HAUTE_MOSELOTTE_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T_HAUTE_MOSELOTTE_23, 
                style: style_T_HAUTE_MOSELOTTE_23,
                popuplayertitle: 'T_HAUTE_MOSELOTTE',
                interactive: true,
                title: '<img src="styles/legend/T_HAUTE_MOSELOTTE_23.png" /> T_HAUTE_MOSELOTTE'
            });
var format_U_MARCHE_C_PGL_24 = new ol.format.GeoJSON();
var features_U_MARCHE_C_PGL_24 = format_U_MARCHE_C_PGL_24.readFeatures(json_U_MARCHE_C_PGL_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_MARCHE_C_PGL_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_MARCHE_C_PGL_24.addFeatures(features_U_MARCHE_C_PGL_24);
var lyr_U_MARCHE_C_PGL_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_U_MARCHE_C_PGL_24, 
                style: style_U_MARCHE_C_PGL_24,
                popuplayertitle: 'U_MARCHE_C_PGL',
                interactive: true,
                title: '<img src="styles/legend/U_MARCHE_C_PGL_24.png" /> U_MARCHE_C_PGL'
            });
var format_V_AVIERE_25 = new ol.format.GeoJSON();
var features_V_AVIERE_25 = format_V_AVIERE_25.readFeatures(json_V_AVIERE_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_V_AVIERE_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_V_AVIERE_25.addFeatures(features_V_AVIERE_25);
var lyr_V_AVIERE_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_V_AVIERE_25, 
                style: style_V_AVIERE_25,
                popuplayertitle: 'V_AVIERE',
                interactive: true,
                title: '<img src="styles/legend/V_AVIERE_25.png" /> V_AVIERE'
            });
var format_X_HAUT_BARBA_26 = new ol.format.GeoJSON();
var features_X_HAUT_BARBA_26 = format_X_HAUT_BARBA_26.readFeatures(json_X_HAUT_BARBA_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_X_HAUT_BARBA_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_X_HAUT_BARBA_26.addFeatures(features_X_HAUT_BARBA_26);
var lyr_X_HAUT_BARBA_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_X_HAUT_BARBA_26, 
                style: style_X_HAUT_BARBA_26,
                popuplayertitle: 'X_HAUT_BARBA',
                interactive: true,
                title: '<img src="styles/legend/X_HAUT_BARBA_26.png" /> X_HAUT_BARBA'
            });
var format_Y_FRICHE_BEAUMENIL_27 = new ol.format.GeoJSON();
var features_Y_FRICHE_BEAUMENIL_27 = format_Y_FRICHE_BEAUMENIL_27.readFeatures(json_Y_FRICHE_BEAUMENIL_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Y_FRICHE_BEAUMENIL_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Y_FRICHE_BEAUMENIL_27.addFeatures(features_Y_FRICHE_BEAUMENIL_27);
var lyr_Y_FRICHE_BEAUMENIL_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Y_FRICHE_BEAUMENIL_27, 
                style: style_Y_FRICHE_BEAUMENIL_27,
                popuplayertitle: 'Y_FRICHE_BEAUMENIL',
                interactive: true,
                title: '<img src="styles/legend/Y_FRICHE_BEAUMENIL_27.png" /> Y_FRICHE_BEAUMENIL'
            });
var format_RESSOURCE_EN_EAU_28 = new ol.format.GeoJSON();
var features_RESSOURCE_EN_EAU_28 = format_RESSOURCE_EN_EAU_28.readFeatures(json_RESSOURCE_EN_EAU_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESSOURCE_EN_EAU_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESSOURCE_EN_EAU_28.addFeatures(features_RESSOURCE_EN_EAU_28);
var lyr_RESSOURCE_EN_EAU_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESSOURCE_EN_EAU_28, 
                style: style_RESSOURCE_EN_EAU_28,
                popuplayertitle: 'RESSOURCE_EN_EAU',
                interactive: true,
                title: '<img src="styles/legend/RESSOURCE_EN_EAU_28.png" /> RESSOURCE_EN_EAU'
            });
var format_Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29 = new ol.format.GeoJSON();
var features_Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29 = format_Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29.readFeatures(json_Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29.addFeatures(features_Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29);
var lyr_Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29, 
                style: style_Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29,
                popuplayertitle: 'Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE',
                interactive: true,
                title: '<img src="styles/legend/Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29.png" /> Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE'
            });

lyr_PlanIGN_0.setVisible(true);lyr_Perimetre_Syndicat_VF_1.setVisible(true);lyr_TRONCONSHYDRO_SMMA_2.setVisible(true);lyr_PLANS_D_EAU_SMMA_3.setVisible(true);lyr_A_NPRU_CHAMP_DU_PIN_4.setVisible(true);lyr_B_RIPISYLVE_MOSELLE_JARMENIL_5.setVisible(true);lyr_C_SAINT_OGER_6.setVisible(true);lyr_D_SOBA_7.setVisible(true);lyr_E_TRAVERSEE_EPINAL_8.setVisible(true);lyr_F_ETANGS_SOCOURT_GRIPPORT_9.setVisible(true);lyr_G_AFFLUENTS_MOSELLE_10.setVisible(true);lyr_H_MOSELLE_SOURCE_A_RUPT_11.setVisible(true);lyr_I_MOSELOTTE_ET_AFFLUENTS_12.setVisible(true);lyr_J_VOLOGNE_ET_AFFLUENTS_13.setVisible(true);lyr_K_MULETTE_PERLIERE_14.setVisible(true);lyr_L_DURBION_15.setVisible(true);lyr_M_NEUNE_16.setVisible(true);lyr_N_SEUILS_ST_NABORD_17.setVisible(true);lyr_O_MOSELLE_MOSELOTTE_18.setVisible(true);lyr_P_AFFLUENTS_MOSELLE_MOSELOTTE_19.setVisible(true);lyr_Q_ZONES_HUMIDES_20.setVisible(true);lyr_R_EURON_21.setVisible(true);lyr_S_CLEURIE_22.setVisible(true);lyr_T_HAUTE_MOSELOTTE_23.setVisible(true);lyr_U_MARCHE_C_PGL_24.setVisible(true);lyr_V_AVIERE_25.setVisible(true);lyr_X_HAUT_BARBA_26.setVisible(true);lyr_Y_FRICHE_BEAUMENIL_27.setVisible(true);lyr_RESSOURCE_EN_EAU_28.setVisible(true);lyr_Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29.setVisible(true);
var layersList = [lyr_PlanIGN_0,lyr_Perimetre_Syndicat_VF_1,lyr_TRONCONSHYDRO_SMMA_2,lyr_PLANS_D_EAU_SMMA_3,lyr_A_NPRU_CHAMP_DU_PIN_4,lyr_B_RIPISYLVE_MOSELLE_JARMENIL_5,lyr_C_SAINT_OGER_6,lyr_D_SOBA_7,lyr_E_TRAVERSEE_EPINAL_8,lyr_F_ETANGS_SOCOURT_GRIPPORT_9,lyr_G_AFFLUENTS_MOSELLE_10,lyr_H_MOSELLE_SOURCE_A_RUPT_11,lyr_I_MOSELOTTE_ET_AFFLUENTS_12,lyr_J_VOLOGNE_ET_AFFLUENTS_13,lyr_K_MULETTE_PERLIERE_14,lyr_L_DURBION_15,lyr_M_NEUNE_16,lyr_N_SEUILS_ST_NABORD_17,lyr_O_MOSELLE_MOSELOTTE_18,lyr_P_AFFLUENTS_MOSELLE_MOSELOTTE_19,lyr_Q_ZONES_HUMIDES_20,lyr_R_EURON_21,lyr_S_CLEURIE_22,lyr_T_HAUTE_MOSELOTTE_23,lyr_U_MARCHE_C_PGL_24,lyr_V_AVIERE_25,lyr_X_HAUT_BARBA_26,lyr_Y_FRICHE_BEAUMENIL_27,lyr_RESSOURCE_EN_EAU_28,lyr_Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29];
lyr_Perimetre_Syndicat_VF_1.set('fieldAliases', {'ID': 'ID', 'CODE_EPCI': 'CODE_EPCI', 'NOM_EPCI': 'NOM_EPCI', 'TYPE_EPCI': 'TYPE_EPCI', 'C_SS_SECT': 'C_SS_SECT', 'LIBELLE': 'LIBELLE', 'LIB_SECT': 'LIB_SECT', 'LIB_REGION': 'LIB_REGION', 'surf_km2': 'surf_km2', 'Superficie': 'Superficie', });
lyr_TRONCONSHYDRO_SMMA_2.set('fieldAliases', {'gid': 'gid', 'CdOH': 'CdOH', 'DateCreati': 'DateCreati', 'StatutOH': 'StatutOH', 'TopoOH': 'TopoOH', 'StatutNomO': 'StatutNomO', 'SourceNomO': 'SourceNomO', 'NatureTH': 'NatureTH', 'TronconFic': 'TronconFic', 'PositionPa': 'PositionPa', 'Persistanc': 'Persistanc', 'SaliniteTH': 'SaliniteTH', 'OrigineTH': 'OrigineTH', 'SensEcoule': 'SensEcoule', 'ReseauPrin': 'ReseauPrin', 'Delimitati': 'Delimitati', 'ClasseLarg': 'ClasseLarg', 'BrasTH': 'BrasTH', 'NumeroOrdr': 'NumeroOrdr', 'StrategieC': 'StrategieC', 'PerimetreU': 'PerimetreU', 'Commentair': 'Commentair', 'CdCoursEau': 'CdCoursEau', 'CdCoursE_1': 'CdCoursE_1', 'CdCoursE_2': 'CdCoursE_2', 'CdSurfaceE': 'CdSurfaceE', 'CdPays_1': 'CdPays_1', 'CdPays_2': 'CdPays_2', 'CdPays_3': 'CdPays_3', 'SystemeAlt': 'SystemeAlt', 'PrecAltiOH': 'PrecAltiOH', 'ModeAltiOH': 'ModeAltiOH', 'PrecPlaniO': 'PrecPlaniO', 'ModObCoord': 'ModObCoord', 'ProjCoordO': 'ProjCoordO', 'Linéaire': 'Linéaire', });
lyr_PLANS_D_EAU_SMMA_3.set('fieldAliases', {'gid': 'gid', 'CdOH': 'CdOH', 'TopoOH': 'TopoOH', 'SourceNomO': 'SourceNomO', 'NaturePE': 'NaturePE', 'DateCreati': 'DateCreati', 'StatutOH': 'StatutOH', 'InfluenceM': 'InfluenceM', 'CaractereP': 'CaractereP', 'AltitudeOH': 'AltitudeOH', 'SystemeAlt': 'SystemeAlt', 'ModeAltiOH': 'ModeAltiOH', 'PrecAltiOH': 'PrecAltiOH', 'HauteurMax': 'HauteurMax', 'ModHauteur': 'ModHauteur', 'Commentair': 'Commentair', 'ProjCoordO': 'ProjCoordO', });
lyr_A_NPRU_CHAMP_DU_PIN_4.set('fieldAliases', {'id': 'id', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_B_RIPISYLVE_MOSELLE_JARMENIL_5.set('fieldAliases', {'id': 'id', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_C_SAINT_OGER_6.set('fieldAliases', {'FID': 'FID', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_D_SOBA_7.set('fieldAliases', {'FID': 'FID', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_E_TRAVERSEE_EPINAL_8.set('fieldAliases', {'id': 'id', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_F_ETANGS_SOCOURT_GRIPPORT_9.set('fieldAliases', {'id': 'id', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_G_AFFLUENTS_MOSELLE_10.set('fieldAliases', {'id': 'id', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_H_MOSELLE_SOURCE_A_RUPT_11.set('fieldAliases', {'FID': 'FID', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_I_MOSELOTTE_ET_AFFLUENTS_12.set('fieldAliases', {'gid': 'gid', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_J_VOLOGNE_ET_AFFLUENTS_13.set('fieldAliases', {'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_K_MULETTE_PERLIERE_14.set('fieldAliases', {'id': 'id', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_L_DURBION_15.set('fieldAliases', {'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_M_NEUNE_16.set('fieldAliases', {'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_N_SEUILS_ST_NABORD_17.set('fieldAliases', {'id': 'id', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_O_MOSELLE_MOSELOTTE_18.set('fieldAliases', {'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_P_AFFLUENTS_MOSELLE_MOSELOTTE_19.set('fieldAliases', {'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_Q_ZONES_HUMIDES_20.set('fieldAliases', {'id': 'id', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_R_EURON_21.set('fieldAliases', {'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_S_CLEURIE_22.set('fieldAliases', {'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_T_HAUTE_MOSELOTTE_23.set('fieldAliases', {'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_U_MARCHE_C_PGL_24.set('fieldAliases', {'id': 'id', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_V_AVIERE_25.set('fieldAliases', {'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_X_HAUT_BARBA_26.set('fieldAliases', {'id': 'id', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_Y_FRICHE_BEAUMENIL_27.set('fieldAliases', {'id': 'id', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_RESSOURCE_EN_EAU_28.set('fieldAliases', {'id': 'id', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29.set('fieldAliases', {'id': 'id', 'CODE_CARTE': 'CODE_CARTE', 'NOM_PROJET': 'NOM_PROJET', 'AVANCEMENT': 'AVANCEMENT', });
lyr_Perimetre_Syndicat_VF_1.set('fieldImages', {'ID': 'TextEdit', 'CODE_EPCI': 'TextEdit', 'NOM_EPCI': 'TextEdit', 'TYPE_EPCI': 'TextEdit', 'C_SS_SECT': 'TextEdit', 'LIBELLE': 'TextEdit', 'LIB_SECT': 'TextEdit', 'LIB_REGION': 'TextEdit', 'surf_km2': 'Range', 'Superficie': 'TextEdit', });
lyr_TRONCONSHYDRO_SMMA_2.set('fieldImages', {'gid': 'TextEdit', 'CdOH': 'TextEdit', 'DateCreati': 'TextEdit', 'StatutOH': 'TextEdit', 'TopoOH': 'TextEdit', 'StatutNomO': 'TextEdit', 'SourceNomO': 'TextEdit', 'NatureTH': 'TextEdit', 'TronconFic': 'Range', 'PositionPa': 'TextEdit', 'Persistanc': 'TextEdit', 'SaliniteTH': 'Range', 'OrigineTH': 'TextEdit', 'SensEcoule': 'TextEdit', 'ReseauPrin': 'Range', 'Delimitati': 'Range', 'ClasseLarg': 'TextEdit', 'BrasTH': 'TextEdit', 'NumeroOrdr': 'TextEdit', 'StrategieC': 'TextEdit', 'PerimetreU': 'TextEdit', 'Commentair': 'TextEdit', 'CdCoursEau': 'TextEdit', 'CdCoursE_1': 'TextEdit', 'CdCoursE_2': 'TextEdit', 'CdSurfaceE': 'TextEdit', 'CdPays_1': 'TextEdit', 'CdPays_2': 'TextEdit', 'CdPays_3': 'TextEdit', 'SystemeAlt': 'TextEdit', 'PrecAltiOH': 'TextEdit', 'ModeAltiOH': 'TextEdit', 'PrecPlaniO': 'TextEdit', 'ModObCoord': 'TextEdit', 'ProjCoordO': 'TextEdit', 'Linéaire': 'TextEdit', });
lyr_PLANS_D_EAU_SMMA_3.set('fieldImages', {'gid': 'TextEdit', 'CdOH': 'TextEdit', 'TopoOH': 'TextEdit', 'SourceNomO': 'TextEdit', 'NaturePE': 'TextEdit', 'DateCreati': 'TextEdit', 'StatutOH': 'TextEdit', 'InfluenceM': 'Range', 'CaractereP': 'Range', 'AltitudeOH': 'TextEdit', 'SystemeAlt': 'TextEdit', 'ModeAltiOH': 'TextEdit', 'PrecAltiOH': 'TextEdit', 'HauteurMax': 'TextEdit', 'ModHauteur': 'TextEdit', 'Commentair': 'TextEdit', 'ProjCoordO': 'TextEdit', });
lyr_A_NPRU_CHAMP_DU_PIN_4.set('fieldImages', {'id': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_B_RIPISYLVE_MOSELLE_JARMENIL_5.set('fieldImages', {'id': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_C_SAINT_OGER_6.set('fieldImages', {'FID': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_D_SOBA_7.set('fieldImages', {'FID': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_E_TRAVERSEE_EPINAL_8.set('fieldImages', {'id': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_F_ETANGS_SOCOURT_GRIPPORT_9.set('fieldImages', {'id': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_G_AFFLUENTS_MOSELLE_10.set('fieldImages', {'id': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_H_MOSELLE_SOURCE_A_RUPT_11.set('fieldImages', {'FID': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_I_MOSELOTTE_ET_AFFLUENTS_12.set('fieldImages', {'gid': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_J_VOLOGNE_ET_AFFLUENTS_13.set('fieldImages', {'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_K_MULETTE_PERLIERE_14.set('fieldImages', {'id': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_L_DURBION_15.set('fieldImages', {'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_M_NEUNE_16.set('fieldImages', {'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_N_SEUILS_ST_NABORD_17.set('fieldImages', {'id': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_O_MOSELLE_MOSELOTTE_18.set('fieldImages', {'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_P_AFFLUENTS_MOSELLE_MOSELOTTE_19.set('fieldImages', {'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_Q_ZONES_HUMIDES_20.set('fieldImages', {'id': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_R_EURON_21.set('fieldImages', {'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_S_CLEURIE_22.set('fieldImages', {'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_T_HAUTE_MOSELOTTE_23.set('fieldImages', {'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_U_MARCHE_C_PGL_24.set('fieldImages', {'id': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_V_AVIERE_25.set('fieldImages', {'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_X_HAUT_BARBA_26.set('fieldImages', {'id': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_Y_FRICHE_BEAUMENIL_27.set('fieldImages', {'id': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_RESSOURCE_EN_EAU_28.set('fieldImages', {'id': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29.set('fieldImages', {'id': '', 'CODE_CARTE': '', 'NOM_PROJET': '', 'AVANCEMENT': '', });
lyr_Perimetre_Syndicat_VF_1.set('fieldLabels', {'ID': 'no label', 'CODE_EPCI': 'no label', 'NOM_EPCI': 'no label', 'TYPE_EPCI': 'no label', 'C_SS_SECT': 'no label', 'LIBELLE': 'no label', 'LIB_SECT': 'no label', 'LIB_REGION': 'no label', 'surf_km2': 'no label', 'Superficie': 'no label', });
lyr_TRONCONSHYDRO_SMMA_2.set('fieldLabels', {'gid': 'hidden field', 'CdOH': 'hidden field', 'DateCreati': 'hidden field', 'StatutOH': 'hidden field', 'TopoOH': 'no label', 'StatutNomO': 'hidden field', 'SourceNomO': 'hidden field', 'NatureTH': 'hidden field', 'TronconFic': 'hidden field', 'PositionPa': 'hidden field', 'Persistanc': 'hidden field', 'SaliniteTH': 'hidden field', 'OrigineTH': 'hidden field', 'SensEcoule': 'hidden field', 'ReseauPrin': 'hidden field', 'Delimitati': 'hidden field', 'ClasseLarg': 'hidden field', 'BrasTH': 'hidden field', 'NumeroOrdr': 'hidden field', 'StrategieC': 'hidden field', 'PerimetreU': 'hidden field', 'Commentair': 'hidden field', 'CdCoursEau': 'hidden field', 'CdCoursE_1': 'hidden field', 'CdCoursE_2': 'hidden field', 'CdSurfaceE': 'hidden field', 'CdPays_1': 'hidden field', 'CdPays_2': 'hidden field', 'CdPays_3': 'hidden field', 'SystemeAlt': 'hidden field', 'PrecAltiOH': 'hidden field', 'ModeAltiOH': 'hidden field', 'PrecPlaniO': 'hidden field', 'ModObCoord': 'hidden field', 'ProjCoordO': 'hidden field', 'Linéaire': 'hidden field', });
lyr_PLANS_D_EAU_SMMA_3.set('fieldLabels', {'gid': 'no label', 'CdOH': 'no label', 'TopoOH': 'no label', 'SourceNomO': 'no label', 'NaturePE': 'no label', 'DateCreati': 'no label', 'StatutOH': 'no label', 'InfluenceM': 'no label', 'CaractereP': 'no label', 'AltitudeOH': 'no label', 'SystemeAlt': 'no label', 'ModeAltiOH': 'no label', 'PrecAltiOH': 'no label', 'HauteurMax': 'no label', 'ModHauteur': 'no label', 'Commentair': 'no label', 'ProjCoordO': 'no label', });
lyr_A_NPRU_CHAMP_DU_PIN_4.set('fieldLabels', {'id': 'no label', 'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_B_RIPISYLVE_MOSELLE_JARMENIL_5.set('fieldLabels', {'id': 'no label', 'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_C_SAINT_OGER_6.set('fieldLabels', {'FID': 'no label', 'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_D_SOBA_7.set('fieldLabels', {'FID': 'no label', 'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_E_TRAVERSEE_EPINAL_8.set('fieldLabels', {'id': 'no label', 'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_F_ETANGS_SOCOURT_GRIPPORT_9.set('fieldLabels', {'id': 'no label', 'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_G_AFFLUENTS_MOSELLE_10.set('fieldLabels', {'id': 'no label', 'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_H_MOSELLE_SOURCE_A_RUPT_11.set('fieldLabels', {'FID': 'no label', 'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_I_MOSELOTTE_ET_AFFLUENTS_12.set('fieldLabels', {'gid': 'no label', 'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_J_VOLOGNE_ET_AFFLUENTS_13.set('fieldLabels', {'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_K_MULETTE_PERLIERE_14.set('fieldLabels', {'id': 'no label', 'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_L_DURBION_15.set('fieldLabels', {'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_M_NEUNE_16.set('fieldLabels', {'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_N_SEUILS_ST_NABORD_17.set('fieldLabels', {'id': 'no label', 'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_O_MOSELLE_MOSELOTTE_18.set('fieldLabels', {'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_P_AFFLUENTS_MOSELLE_MOSELOTTE_19.set('fieldLabels', {'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_Q_ZONES_HUMIDES_20.set('fieldLabels', {'id': 'no label', 'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_R_EURON_21.set('fieldLabels', {'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_S_CLEURIE_22.set('fieldLabels', {'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_T_HAUTE_MOSELOTTE_23.set('fieldLabels', {'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_U_MARCHE_C_PGL_24.set('fieldLabels', {'id': 'no label', 'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_V_AVIERE_25.set('fieldLabels', {'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_X_HAUT_BARBA_26.set('fieldLabels', {'id': 'no label', 'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_Y_FRICHE_BEAUMENIL_27.set('fieldLabels', {'id': 'no label', 'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_RESSOURCE_EN_EAU_28.set('fieldLabels', {'id': 'no label', 'CODE_CARTE': 'header label - visible with data', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29.set('fieldLabels', {'id': 'no label', 'CODE_CARTE': 'no label', 'NOM_PROJET': 'no label', 'AVANCEMENT': 'no label', });
lyr_Z_MODELISATION_HYDRAULIQUE_MOSELLE_FRANCAISE_29.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});