WITH a AS (
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
)

SELECT 
  id,
  effort_name,
  effort_primary_species,
  effort_status,
  effort_purpose,
  effort_agency,
  (
    SELECT to_jsonb(array_agg(to_jsonb(a)))
    FROM a
    WHERE effort_id = efforts.id
  ) AS "activities"
FROM efforts;