/**
 * User Interface
 */
interface HassUser {
    attributes: {
        editable: Boolean,
        entity_picture: String,
        friendly_name: String,
        gps_accuracy: Number,
        id: String,
        latitude: Number,
        longitude: Number,
        source: String,
        user_id: String
      },
      context: {
        id: String,
        parent_id: String,
        user_id: String
      },
      entity_id: String,
      last_changes: String,
      last_updated: String,
      state: String
}

export type { HassUser };