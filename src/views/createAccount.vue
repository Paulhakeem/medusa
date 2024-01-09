<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import { getAuth, createUserWithEmailAndPassword, 
	GoogleAuthProvider, GithubAuthProvider, 
	FacebookAuthProvider, signInWithPopup } from "firebase/auth"


const router = useRouter()
const provider = new GoogleAuthProvider()
const github = new GithubAuthProvider()
const facebbok = new FacebookAuthProvider()

const accountDetails =ref(
	{
		email: '',
		password: '',
	}
)

const createAccount = () => {
	createUserWithEmailAndPassword(getAuth(), accountDetails.value.email, accountDetails.value.password)
	.then(() => {
		accountDetails.value = {
			email: '',
			password: '',
		}
		router.push({
			path: '/dashboard'
		})
	})
	.catch(err => {
    alert(err.message)
	})

}

const useGoogle = () => {
	signInWithPopup(getAuth(), provider)
	.then(() => {
		path: '/dashboard'
	})
	.catch(err => {
		alert(err.message)
	})
}

const useGithub = () => {
	signInWithPopup(getAuth(), github)
	.then(() => {
		path: '/dashboard'
	})
	.catch(err => {
		alert(err.message)
	})
}

const useFacebook = () => {
	signInWithPopup(getAuth(), facebbok)
	.then(() => {
		path: '/dashboard'
	})
	.catch(err => {
		alert(err.message)
	})
}
</script>

<template>
<div>
	 <Header/>
    <!-- component -->
<div class="min-h-auto bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="container1 absolute inset-0 bg-gradient-to-r from-green-200 to-primary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="container1 relative px-4 py-8 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-medium text-gray-500 tracking-wider">Create your account</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<form 
					@submit.prevent="createAccount"
					class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input v-model="accountDetails.email" autocomplete="off" id="email" name="email" type="text" class="peer font-light placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-500 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 font-light text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div class="relative">
							<input v-model="accountDetails.password" autocomplete="off" id="password" name="password" type="password" class="text-gray-500 font-medium peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 font-light text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
                        
						<div class="relative">
							<button class="bg-primary text-white rounded-md px-2 py-1 font-light">Make Payment</button>
						</div>
                        <div class="pt-8 flex gap-6 justify-center">
                            <font-awesome-icon
							@click="useGoogle"
                            class="text-gray-500 text-2xl cursor-pointer" 
                            :icon="['fab', 'google']" />

							<font-awesome-icon 
							@click="useGithub"
							class="text-gray-500 text-2xl cursor-pointer" 
							:icon="['fab', 'github']" />

							<font-awesome-icon 
							@click="useFacebook"
							class="text-gray-500 text-2xl cursor-pointer" 
							:icon="['fab', 'facebook']" />
                        </div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
   
</template>