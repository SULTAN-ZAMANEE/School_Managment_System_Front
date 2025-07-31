import React from "react";
import '../../../App.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import '@fortawesome/fontawesome-free'


const RoleCard = () => {
  return (
    <>
        <div class="main-bg-color role-card bg-white rounded-xl shadow-md overflow-hidden rounded">
            <div class="p-6 bg-indigo-600">
                <div class="flex items-center justify-center">
                    <i class="fas fa-user-graduate text-white text-4xl"></i>
                </div>
            </div>
            <div class="px-6 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Students</h3>
                <ul class="list-disc list-inside text-gray-500 space-y-2">
                    <li>Browse subjects by grade</li>
                    <li>Watch video lessons</li>
                    <li>Take quizzes</li>
                    <li>Download materials</li>
                    <li>Track performance</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default RoleCard;