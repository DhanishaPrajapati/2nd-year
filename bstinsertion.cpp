#include<iostream>
using namespace std;
int i;
void insert(int T[], int n, int key)
{
    int i=0;
    while(i<n){
        if(T[i]==-1){
            T[i]=key;
            return;
        }
        if(key<T[i]){
            i = 2*i+1;
        }
        else{
            i = 2*i+2;
        }
    }
}
void inorder(int T[], int i, int n){
    if( i>=n || T[i]==-1)
    return;
    inorder(T, 2*i+1, n);
    cout<<T[i]<<" ";
    inorder(T, 2*i+2, n);
}
int main(){
    int T[13];
    int n =13;
    for(int i=0; i<n; i++)
        T[i] = -1;
        insert(T, n, 70);
        insert(T, n, 50);
        insert(T, n, 90);
        insert(T, n, 30);
        insert(T, n, 80);
        insert(T, n, 100);
        cout<<"Inorder: ";
        inorder(T, 0, n);
        return 0;
}