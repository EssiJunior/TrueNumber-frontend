"use client"

import { useState } from 'react'

import Loader from '@/components/Loader/Loader';
import Image from 'next/image';
// import { game } from '@/requests/auth';
import Button from '@/components/Button';

function Game() {
    const [isLoading, setIsLoading] = useState(false)

    const [score, setScore] = useState(0)


    function generateRandomNumberAfter3s(SetIsLoading: React.Dispatch<React.SetStateAction<boolean>>) {
        SetIsLoading(true);
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 101);

            if (randomNumber <= 70) {
                SetIsLoading(false);
                setScore(randomNumber);
                alert(`Vous avez perdu ! 😞 (Nombre : ${randomNumber})`);
            } else if (randomNumber <= 100) {
                SetIsLoading(false);
                setScore(randomNumber);
                alert(`Félicitations, vous avez gagné ! 🎉 (Nombre : ${randomNumber})`);
            }
        }, 3000);
    }

    return (
        <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center relative">
            <form className="flex flex-col justify-center items-center  w-full md:w-1/2 h-full py-10 px-20 overflow-auto">

                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-200 mb-8 text-start w-full">
                    Play TrueNumber Game
                </h1>

                <section className="w-full">
                    Your score:

                    <span className="text-blue-400 text-3xl">{score}</span>
                </section>

                <div className="flex flex-col justify-center w-full mt-8">
                    <Button
                        type="button"
                        onClick={() => generateRandomNumberAfter3s(setIsLoading)}
                    >
                        {isLoading ? <Loader /> : 'Generate number'}
                    </Button>
                </div>
            </form>
            <div className="max-md:hidden md:w-1/2 h-full bg-blue-400 flex items-center justify-center relative">
                <Image src="/assets/gamepad.jpg" alt="Sign Up" width={500} height={500} className="w-full h-full object-cover" />
            </div>
        </div>
    )
}

export default Game;