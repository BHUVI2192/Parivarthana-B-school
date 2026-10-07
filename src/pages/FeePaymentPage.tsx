import React, { useState } from 'react';
import { CreditCard, Building2, Hash, MapPin, Smartphone, CheckCircle, AlertCircle, Copy, Check, QrCode } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const FeePaymentPage: React.FC = () => {
  const bankDetails = {
    accountName: 'Parivarthana Business School',
    accountNumber: '459901000160',
    ifscCode: 'ICIC0004599',
    bankName: 'ICICI Bank',
    branch: 'NR Mohalla, Mysore'
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 mb-12 text-white">
            <div className="flex items-center justify-center mb-4">
              <CreditCard className="w-16 h-16 mr-4" />
              <h1 className="text-4xl font-bold">Fee Payment</h1>
            </div>
            <p className="text-center text-lg text-blue-100 max-w-3xl mx-auto">
              Pay your fees securely using UPI or bank transfer. Please keep your transaction ID for future reference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Smartphone className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">UPI Payment</h2>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-600 mb-4 text-center">Scan this QR code with any UPI app</p>
                <div className="flex justify-center mb-4">
                  <img
                    src={getAssetUrl('QRCode.png')}
                    alt="UPI QR Code"
                    className="w-64 h-64 rounded-lg shadow-md bg-white p-2"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-xs text-gray-500 mb-1">UPI ID</p>
                  <p className="text-lg font-bold text-gray-900">MSPARIVARTHANAFIRSTGRADE@icici</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-yellow-800 mb-1">Important:</p>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Save the transaction ID after payment</li>
                      <li>• Take a screenshot of the payment confirmation</li>
                      <li>• Submit the transaction details to the office</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Building2 className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Bank Transfer</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center mb-2">
                    <Building2 className="w-5 h-5 text-gray-600 mr-2" />
                    <p className="text-sm font-semibold text-gray-600">Account Name</p>
                  </div>
                  <p className="text-lg font-bold text-gray-900 ml-7">{bankDetails.accountName}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center mb-2">
                    <Hash className="w-5 h-5 text-gray-600 mr-2" />
                    <p className="text-sm font-semibold text-gray-600">Account Number</p>
                  </div>
                  <p className="text-lg font-bold text-gray-900 ml-7 font-mono">{bankDetails.accountNumber}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center mb-2">
                    <CreditCard className="w-5 h-5 text-gray-600 mr-2" />
                    <p className="text-sm font-semibold text-gray-600">IFSC Code</p>
                  </div>
                  <p className="text-lg font-bold text-gray-900 ml-7 font-mono">{bankDetails.ifscCode}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center mb-2">
                    <Building2 className="w-5 h-5 text-gray-600 mr-2" />
                    <p className="text-sm font-semibold text-gray-600">Bank Name</p>
                  </div>
                  <p className="text-lg font-bold text-gray-900 ml-7">{bankDetails.bankName}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-gray-600 mr-2" />
                    <p className="text-sm font-semibold text-gray-600">Branch</p>
                  </div>
                  <p className="text-lg font-bold text-gray-900 ml-7">{bankDetails.branch}</p>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-blue-800 mb-1">NEFT/RTGS/IMPS Transfers:</p>
                    <p className="text-sm text-blue-700">
                      Use the above bank details for direct bank transfers. Processing time may vary based on the transfer method.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertCircle className="w-7 h-7 text-orange-600 mr-3" />
              Payment Instructions
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Before Making Payment:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <span className="text-gray-700">Verify the fee amount with the office</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <span className="text-gray-700">Ensure you have your student ID number ready</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <span className="text-gray-700">Keep your device charged for UPI payments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    <span className="text-gray-700">Double-check all bank details before transferring</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">After Making Payment:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <span className="text-gray-700">Save the transaction ID or reference number</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <span className="text-gray-700">Take a screenshot of the payment confirmation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <span className="text-gray-700">Submit payment details to the accounts office</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    <span className="text-gray-700">Collect your fee receipt from the office</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-red-800 mb-1">Important Notice:</p>
                  <p className="text-sm text-red-700">
                    The college is not responsible for payments made to incorrect account details. Always verify the account information before making any payment. Contact the office for any payment-related queries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Accounts Office</h3>
                <p className="text-gray-700 mb-1">Monday to Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-gray-700">For payment queries, please visit the accounts office</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">For Assistance</h3>
                <p className="text-gray-700 mb-1">Contact the administration office</p>
                <p className="text-gray-700">during working hours for any payment-related help</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeePaymentPage;
