import mongoose from 'mongoose';

const DemoRequestSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  companyName: { type: String, required: true },
  jobTitle: { type: String, required: true },
  phoneNumber: { type: String },
  teamSize: { type: String, required: true },
  preferredDate: { type: String, required: true },
  preferredTime: { type: String, required: true },
  timezone: { type: String, required: true },
  message: { type: String },
  requestedAt: { type: Date, default: Date.now },
  status: { type: String, default: 'New', enum: ['New', 'Contacted', 'Scheduled', 'Completed', 'Cancelled'] }
});

export default mongoose.models.DemoRequest || mongoose.model('DemoRequest', DemoRequestSchema);