SELECT
  id,
  effort_id,
  activity_name,
  activity_type,
  activity_start_date,
  activity_duration,
  activity_time_frame,
  activity_description
FROM activities
WHERE id = ${id};