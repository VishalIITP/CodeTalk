import React from 'react'
import './css/Courseplan.css'

function CoursePlan() {
    return (
        <div>
            <div className="coursePlan">
                <span className="wwylwhite">Here's how it works over the  </span>
                <span className="wwylgreen">4 weeks.</span>
                <div className="CoursePlanContainer">
                    <div className="CourseWeek">
                        <div className="courseWeekImg1"></div>
                        <div className="cwline"></div>
                        <div className="courseWeektext">
                            <div className="courseWeektheading">Week 1: Foundations of Data Structures</div>
                            <div className="courseWeektdis">
                                <ul className="weekdetails">
                                    <div className="dayItem"><span className='dayNO'>Day 1: </span> Introduction to the Course, Big O Notation, and Complexity Analysis.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 2: </span> Arrays and Strings: Understanding, manipulation, and common problems.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 3: </span> Linked Lists: Singly, Doubly, Circular. Common operations and problems.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 4: </span> Stacks and Queues: Concepts, applications, and problems.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 5: </span>  Review of the week's concepts and Q&A session.</div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="CourseWeek">
                        <div className="courseWeekImg2"></div>
                        <div className="cwline"></div>
                        <div className="courseWeektext">
                            <div className="courseWeektheading">Week 2: Advanced Data Structures</div>
                            <div className="courseWeektdis">
                                <ul className="weekdetails">
                                    <div className="dayItem"><span className='dayNO'>Day 6: </span> Trees and Binary Trees: Concepts, traversal algorithms, and problems.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 7: </span> Binary Search Trees: Properties, operations, and problems.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 8: </span> Heaps and Priority Queues: Implementation and applications.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 9:</span> Graphs: Representation, traversal, and common graph algorithms.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 10:</span>  Problem-solving session and discussion on tree and graph problems.</div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="CourseWeek">
                        <div className="courseWeekImg3"></div>
                        <div className="cwline"></div>
                        <div className="courseWeektext">
                            <div className="courseWeektheading">Week 3: Algorithms Part I</div>
                            <div className="courseWeektdis">
                                <ul className="weekdetails">
                                    <div className="dayItem"><span className='dayNO'>Day 11:</span> Searching Algorithms: Linear and Binary Search, variations, and complexities.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 12:</span> Sorting Algorithms: Bubble, Selection, Insertion, and Merge Sort.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 13:</span> Divide and Conquer: Recursive approach, problems like Binary Search.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 14:</span> Dynamic Programming: Concepts and solving DP problems.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 15:</span>  DP problems discussion and dynamic programming approach.</div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="CourseWeek">
                        <div className="courseWeekImg4"></div>
                        <div className="cwline"></div>
                        <div className="courseWeektext">
                            <div className="courseWeektheading">Week 4: Algorithms Part II</div>
                            <div className="courseWeektdis">
                                <ul className="weekdetails">
                                    <div className="dayItem"><span className='dayNO'>Day 16:</span> Greedy Algorithms: Principles and problems DayItemke Minimum Spanning Trees.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 17:</span> Backtracking: Understanding and solving problems DayItemke N-Queens.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 18:</span> Bit Manipulation: Basics and appcations in problem-solving.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 19:</span> Advanced Topics: Trie, Segment Tree, and Fenwick Tree.</div>
                                    <div className="dayItem"><span className='dayNO'>Day 20:</span>  Final problem-solving session, interview tips, and course review.</div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursePlan