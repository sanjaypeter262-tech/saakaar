import React, { useState } from 'react';
import './index.css';

// Logo placeholder - replace with actual logo URL
const LOGO_URL = "https://via.placeholder.com/150x150/1e3c72/ffffff?text=SA";

const COURSES = [
  'CAT',
  'IPMAT',
  'CLAT',
  'CUET',
  'NDA',
  'CDS',
  'IMUCET'
];

interface BillingData {
  receiptNo: string;
  date: string;
  studentName: string;
  fatherName: string;
  contactNumber: string;
  email: string;
  address: string;
  selectedCourses: string[];
  includeFoundation: boolean;
  amount: number;
  paymentMode: string;
  notes: string;
}

const initialBillingData: BillingData = {
  receiptNo: '',
  date: new Date().toISOString().split('T')[0],
  studentName: '',
  fatherName: '',
  contactNumber: '',
  email: '',
  address: '',
  selectedCourses: [],
  includeFoundation: false,
  amount: 0,
  paymentMode: 'Cash',
  notes: ''
};

const ACADEMY_INFO = {
  name: 'Saakaar Academy',
  address: 'Plot No 132, Fourth Floor, Zone II, M.P. Nagar, Bhopal',
  website: 'www.saakaaracademy.com',
  contact: '7999290985'
};

function App() {
  const [billingData, setBillingData] = useState<BillingData>(initialBillingData);
  const [showReceipt, setShowReceipt] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBillingData(prev => ({ ...prev, [name]: value }));
  };

  const handleCourseChange = (course: string) => {
    setBillingData(prev => {
      const selected = prev.selectedCourses.includes(course)
        ? prev.selectedCourses.filter(c => c !== course)
        : [...prev.selectedCourses, course];
      return { ...prev, selectedCourses: selected };
    });
  };

  const handleFoundationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingData(prev => ({ ...prev, includeFoundation: e.target.checked }));
  };

  const generateReceiptNo = () => {
    const prefix = 'SA';
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}${timestamp}${random}`;
  };

  const calculateAmount = () => {
    const baseAmount = billingData.selectedCourses.length * 5000; // Example: 5000 per course
    const foundationAmount = billingData.includeFoundation ? 3000 : 0; // Example: 3000 for foundation
    return baseAmount + foundationAmount;
  };

  const handleGenerateReceipt = () => {
    if (!billingData.studentName || billingData.selectedCourses.length === 0) {
      alert('Please enter student name and select at least one course');
      return;
    }
    
    const receiptNo = generateReceiptNo();
    const amount = calculateAmount();
    
    setBillingData(prev => ({
      ...prev,
      receiptNo,
      amount
    }));
    setShowReceipt(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setBillingData(initialBillingData);
    setShowReceipt(false);
  };

  const getAllCourses = () => {
    const courses = [...billingData.selectedCourses];
    if (billingData.includeFoundation) {
      courses.push('Foundation');
    }
    return courses;
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header no-print">
        <div className="logo-section">
          <img src={LOGO_URL} alt="Saakaar Academy Logo" className="logo" />
          <div className="academy-info">
            <h1>{ACADEMY_INFO.name}</h1>
            <p>{ACADEMY_INFO.address}</p>
            <p>Website: {ACADEMY_INFO.website} | Contact: {ACADEMY_INFO.contact}</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content no-print">
        {/* Form Section */}
        <div className="form-section">
          <h2>Billing Information</h2>
          
          <div className="form-group">
            <label>Date *</label>
            <input
              type="date"
              name="date"
              value={billingData.date}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Student Name *</label>
            <input
              type="text"
              name="studentName"
              placeholder="Enter student name"
              value={billingData.studentName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Father's Name</label>
            <input
              type="text"
              name="fatherName"
              placeholder="Enter father's name"
              value={billingData.fatherName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Contact Number *</label>
            <input
              type="tel"
              name="contactNumber"
              placeholder="Enter contact number"
              value={billingData.contactNumber}
              onChange={handleInputChange}
              maxLength={10}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={billingData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              value={billingData.address}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Select Courses *</label>
            <div className="checkbox-group">
              {COURSES.map(course => (
                <label key={course} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={billingData.selectedCourses.includes(course)}
                    onChange={() => handleCourseChange(course)}
                  />
                  {course}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="checkbox-item">
              <input
                type="checkbox"
                checked={billingData.includeFoundation}
                onChange={handleFoundationChange}
              />
              Include Foundation Course
            </label>
          </div>

          <div className="form-group">
            <label>Payment Mode</label>
            <select
              name="paymentMode"
              value={billingData.paymentMode}
              onChange={handleInputChange}
            >
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="UPI">UPI</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Cheque">Cheque</option>
            </select>
          </div>

          <div className="form-group">
            <label>Notes</label>
            <textarea
              name="notes"
              placeholder="Any additional notes"
              value={billingData.notes}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '10px', border: '2px solid #ddd', borderRadius: '5px', minHeight: '80px' }}
            />
          </div>

          <button className="btn" onClick={handleGenerateReceipt}>
            Generate Receipt
          </button>
          
          {showReceipt && (
            <button className="btn" onClick={handleReset} style={{ marginTop: '10px', background: '#dc3545' }}>
              New Billing
            </button>
          )}
        </div>

        {/* Preview Section */}
        <div className="preview-section">
          <h2>Receipt Preview</h2>
          
          {showReceipt ? (
            <div className="receipt-preview receipt-to-print">
              <div className="receipt-header">
                <img src={LOGO_URL} alt="Saakaar Academy Logo" className="receipt-logo" />
                <h2>{ACADEMY_INFO.name}</h2>
                <p>{ACADEMY_INFO.address}</p>
                <p>Website: {ACADEMY_INFO.website}</p>
                <p>Contact: {ACADEMY_INFO.contact}</p>
              </div>

              <div className="receipt-details">
                <div className="detail-row">
                  <span className="detail-label">Receipt No:</span>
                  <span className="detail-value">{billingData.receiptNo}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Date:</span>
                  <span className="detail-value">{billingData.date}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Student Name:</span>
                  <span className="detail-value">{billingData.studentName}</span>
                </div>
                {billingData.fatherName && (
                  <div className="detail-row">
                    <span className="detail-label">Father's Name:</span>
                    <span className="detail-value">{billingData.fatherName}</span>
                  </div>
                )}
                {billingData.contactNumber && (
                  <div className="detail-row">
                    <span className="detail-label">Contact:</span>
                    <span className="detail-value">{billingData.contactNumber}</span>
                  </div>
                )}
                {billingData.email && (
                  <div className="detail-row">
                    <span className="detail-label">Email:</span>
                    <span className="detail-value">{billingData.email}</span>
                  </div>
                )}
                {billingData.address && (
                  <div className="detail-row">
                    <span className="detail-label">Address:</span>
                    <span className="detail-value">{billingData.address}</span>
                  </div>
                )}
              </div>

              <div>
                <strong>Courses Enrolled:</strong>
                <div className="courses-list">
                  {getAllCourses().map((course, index) => (
                    <div key={index} className="course-item">
                      ✓ {course}
                    </div>
                  ))}
                </div>
              </div>

              <div className="total-amount">
                Total Amount: ₹{billingData.amount.toLocaleString('en-IN')}
              </div>

              <div className="receipt-details" style={{ marginTop: '15px' }}>
                <div className="detail-row">
                  <span className="detail-label">Payment Mode:</span>
                  <span className="detail-value">{billingData.paymentMode}</span>
                </div>
              </div>

              {billingData.notes && (
                <div className="receipt-details">
                  <strong>Notes:</strong>
                  <p style={{ marginTop: '5px', color: '#666' }}>{billingData.notes}</p>
                </div>
              )}

              <div className="receipt-footer">
                <p>Thank you for choosing {ACADEMY_INFO.name}!</p>
                <p>For queries, contact us at {ACADEMY_INFO.contact}</p>
                <p>Visit: {ACADEMY_INFO.website}</p>
              </div>

              <button 
                className="btn btn-print no-print" 
                onClick={handlePrint}
                style={{ marginTop: '20px' }}
              >
                🖨️ Print Receipt
              </button>
            </div>
          ) : (
            <div className="no-data">
              <p>Fill in the billing information and click "Generate Receipt" to preview here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
