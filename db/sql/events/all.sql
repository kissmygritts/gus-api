SELECT 
  events.id as event_id,
  events.activity_id as activity_id,
  events.event_date as event_date,
  events.event_type as event_type,
  events.event_method as event_method,
  events.x as x,
  events.y as y,
  events.datum as datum,
  events.comments as comments
FROM events;