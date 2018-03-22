SELECT 
  id,
  common_name,
  species_name,
  alpha_code,
  genus,
  species,
  gbif_key,
  t_phylum,
  t_class,
  t_order,
  t_family,
  grouping,
  ndow_code,
  created_at,
  updated_at
FROM species
LIMIT 15;