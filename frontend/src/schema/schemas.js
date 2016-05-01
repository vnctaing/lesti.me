import { Schema, arrayOf } from 'normalizr';

let appraiserSchema = new Schema('appraiser', { idAttribute: 'name' });
let appraiseeSchema = new Schema('appraisees', { idAttribute: '_id' });
let commentsSchema = new Schema('comments', { idAttribute: '_id' });


appraiserSchema.define({
  appraisees: arrayOf(appraiseeSchema),
  comments: arrayOf(commentsSchema)
})

export default appraiserSchema;