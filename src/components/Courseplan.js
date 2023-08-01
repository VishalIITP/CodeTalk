import React from 'react'
import './css/Courseplan.css'

function CoursePlan() {
    return (
        <div>
            <div className="coursePlan">
                <div className="wwylwhite"> What will you learn in the </div>
                <div className="wwylgreen">Bootcamp?</div>
                <div className="CoursePlanContainer">
                    <div className="CourseWeek">
                        <div className="courseWeekImg1"></div>
                        <div className="cwline"></div>
                        <div className="courseWeektext">
                            <div className="courseWeektheading">Week 1: Foundations of Data Structures</div>
                            <div className="courseWeektdis"> <ul className="weekdetails">
                                <div className="dayItem"><span className='dayNO'>Day 1:</span> Introduction to the Course, Big O Notation, and Complexity Analysis.</div>
                                <div className="dayItem"><span className='dayNO'>Day 2:</span> Arrays and Strings: Understanding, manipulation, and common problems.</div>
                                <div className="dayItem"><span className='dayNO'>Day 3:</span> Linked Lists: Singly, Doubly, Circular. Common operations and problems.</div>
                                <div className="dayItem"><span className='dayNO'>Day 4:</span> Stacks and Queues: Concepts, appDayItemcations, and problems.</div>
                                <div className="dayItem"><span className='dayNO'>Day 5:</span> Live Zoom Meeting: Review of the week's concepts and Q&A session.</div>
                            </ul> </div>
                        </div>
                    </div>
                    <div className="CourseWeek">
                        <div className="courseWeekImg2"></div>
                        <div className="cwline"></div>
                        <div className="courseWeektext">
                            <div className="courseWeektheading">Week 2: Advanced Data Structures</div>
                            <div className="courseWeektdis">
                                <ul className="weekdetails">
                                    <div className="dayItem"><span className='dayNO'>Day 6:</span> Trees and Binary Trees: Concepts, traversal algorithms, and problems.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 7:</span> Binary Search Trees: Properties, operations, and problems.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 8:</span> Heaps and Priority Queues: Implementation and appDayItemcations.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 9:</span> Graphs: Representation, traversal, and common graph algorithms.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 10</span>: Live Zoom Meeting: Problem-solving session and discussion on tree and graph problems.</div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="CourseWeek">
                        <div className="courseWeekImg3"></div>
                        <div className="cwline"></div>
                        <div className="courseWeektext">
                            <div className="courseWeektheading">Week 3: Algorithms Part I</div>
                            <div className="courseWeektdis"><ul className="weekdetails">
                                <div className="dayItem">Day 11: Searching Algorithms: Linear and Binary Search, variations, and complexities.</div>
                                <div className="dayItem">Day 12: Sorting Algorithms: Bubble, Selection, Insertion, and Merge Sort.</div>
                                <div className="dayItem">Day 13: Divide and Conquer: Recursive approach, problems DayItemke Binary Search.</div>
                                <div className="dayItem">Day 14: Dynamic Programming: Concepts and solving DP problems.</div>
                                <div className="dayItem">Day 15: Live Zoom Meeting: DP problems discussion and dynamic programming approach.</div>
                            </ul> </div>
                        </div>
                    </div>
                    <div className="CourseWeek">
                        <div className="courseWeekImg4"></div>
                        <div className="cwline"></div>
                        <div className="courseWeektext">
                            <div className="courseWeektheading">Week 4: Algorithms Part II</div>
                            <div className="courseWeektdis"><ul className="weekdetails">
                                <div className="dayItem">Day 16: Greedy Algorithms: Principles and problems DayItemke Minimum Spanning Trees.</div>
                                <div className="dayItem">Day 17: Backtracking: Understanding and solving problems DayItemke N-Queens.</div>
                                <div className="dayItem">Day 18: Bit Manipulation: Basics and appDayItemcations in problem-solving.</div>
                                <div className="dayItem">Day 19: Advanced Topics: Trie, Segment Tree, and Fenwick Tree.</div>
                                <div className="dayItem">Day 20: Live Zoom Meeting: Final problem-solving session, interview tips, and course review.</div>
                            </ul> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursePlan